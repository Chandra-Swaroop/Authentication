from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import SignUpSchema, SignInSchema
from models import get_user_by_email, create_user
from utils import hash_password, verify_password

app = FastAPI()

origins = [
    "http://localhost:5173", 
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/signup")
def signup(user: SignUpSchema):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    existing_user = get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_pwd = hash_password(user.password)
    create_user({
        "name": user.name,
        "email": user.email,
        "password": hashed_pwd
    })
    return {"msg": "User registered successfully"}

@app.post("/signin")
def signin(user: SignInSchema):
    existing_user = get_user_by_email(user.email)
    if not existing_user:
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    if not verify_password(user.password, existing_user["password"]):
        raise HTTPException(status_code=400, detail="Invalid email or password")
    
    return {"msg": "Login successful", "name": existing_user["name"]}

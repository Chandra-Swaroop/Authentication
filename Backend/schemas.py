from pydantic import BaseModel, EmailStr

class SignUpSchema(BaseModel):
    name: str
    email: EmailStr
    password: str
    confirm_password: str

class SignInSchema(BaseModel):
    email: EmailStr
    password: str

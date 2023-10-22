from pydantic import BaseModel, Field
from datetime import datetime
from bson.objectid import ObjectId
from typing import List, Literal, Optional


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not isinstance(v, ObjectId):
            raise TypeError("ObjectId required")
        return str(v)
    
# General information that is needed for every collection
class DatabaseSchema(BaseModel):
    id: Optional[PydanticObjectId] = Field(alias="_id")
    date_created: datetime
    date_modified: datetime

    def dict(self, exclude_none=True, **kwargs):
        return super().dict(exclude_none=exclude_none, **kwargs)
    
class LocationSchema(BaseModel):
    x: float
    y: float

class AmbulanceSchema(DatabaseSchema):
    id: Optional[PydanticObjectId] = Field(alias="_id")
    loc: LocationSchema
    status: str
    hospital_id: PydanticObjectId
    history: bytes
    reported: bool

class HospitalSchema(DatabaseSchema):
    id: Optional[PydanticObjectId] = Field(alias="_id")

class BloodPressureSchema(BaseModel):
    sys: int
    dia: int

class ReportSchema(DatabaseSchema):
    id: Optional[PydanticObjectId] = Field(alias="_id")
    ambulance_id: PydanticObjectId
    gender: str
    age: int
    heart_rate: int
    resp_rate: int
    sp: int
    bp: BloodPressureSchema
    bs: int
    sample: str

class MessageSchema(DatabaseSchema):
    id: Optional[PydanticObjectId] = Field(alias="_id")
    ambulance_id: PydanticObjectId
    text: str
    sender: PydanticObjectId
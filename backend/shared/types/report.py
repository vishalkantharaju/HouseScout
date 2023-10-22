from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from shared.types.status import GeneralResponse
from shared.db.schema import PydanticObjectId

class NewReportRequest(BaseModel):
    ambulance_id: str
    gender: str
    age: int
    heart_rate: int
    resp_rate: int
    sp: int
    bp: List[int]
    bs: int
    sample: str

class NewReportResponse(GeneralResponse):
    id: PydanticObjectId

class GetReportRequest(BaseModel):
    id: str

class GetReportResponse(GeneralResponse):
    gender: str
    age: int
    heart_rate: int
    resp_rate: int
    sp: int
    bp: List[int]
    bs: int
    sample: str
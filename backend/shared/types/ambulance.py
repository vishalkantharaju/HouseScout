from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime
from shared.types.status import GeneralResponse
from shared.db.schema import PydanticObjectId, AmbulanceSchema, HospitalSchema

class GetAmbulanceRequest(BaseModel):
    id: str

class GetAmbResponse(BaseModel):
    id: str
    unit: int
    loc: List[int]
    status: str
    hospital_id: str
    history: str
    reported: bool

class GetAmbulanceResponse(GeneralResponse):
    ambulances: List[GetAmbResponse]
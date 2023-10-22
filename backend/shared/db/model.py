from pymongo import MongoClient
from shared.constants import DB_USERNAME, DB_PASSWORD
from shared.constants import DB_USERNAME, DB_PASSWORD
from shared.db.schema import (
    AmbulanceSchema,
    LocationSchema,
    HospitalSchema,
    ReportSchema
)
from typing import List, Tuple
from pymongo.errors import PyMongoError
from bson.objectid import ObjectId
from datetime import datetime
from typing import List, Tuple
from pymongo.errors import PyMongoError
from bson.objectid import ObjectId
from datetime import datetime

MONGO_URI = (
    # f"mongodb+srv://{DB_USERNAME}:{DB_PASSWORD}@clubhub.fvsrgft.mongodb.net/"
    f"mongodb+srv://{DB_USERNAME}:{DB_PASSWORD}@medhelp2.llhvl69.mongodb.net/?retryWrites=true&w=majority"
)
db = MongoClient(MONGO_URI)["dev"]

def populate_ambulances() -> Tuple[str, str]:
    amb_data = [
        AmbulanceSchema(
            unit = 408,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Loading",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 408,
            password = 408
        ),
        AmbulanceSchema(
            unit = 681,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "En Route",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 681,
            password = 681
        ),
        AmbulanceSchema(
            unit = 180,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "En Route",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 180,
            password = 180
        ),
        AmbulanceSchema(
            unit = 682,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Loading",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 682,
            password = 682
        ),
        AmbulanceSchema(
            unit = 961,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "En Route",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 961,
            password = 961
        ),
        AmbulanceSchema(
            unit = 182,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Loading",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 182,
            password = 182
        ),
        AmbulanceSchema(
            unit = 420,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Stopped",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 420,
            password = 420
        ),
        AmbulanceSchema(
            unit = 852,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Arrived",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 852,
            password = 852
        ),
        AmbulanceSchema(
            unit = 427,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "Stopped",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 427,
            password = 427
        ),
        AmbulanceSchema(
            unit = 852,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "En Route",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 852,
            password = 852
        ),
        AmbulanceSchema(
            unit = 692,
            loc = LocationSchema(
                x = 1,
                y = 1
            ),
            status = "En Route",
            hospital_id = ObjectId('65346c2626905388bed9087b'),
            history = 0,
            reported = False,
            date_created = datetime.now(),
            date_modified = datetime.now(),
            username = 692,
            password = 692
        ),
    ]
    for ambulance in amb_data:
        ambulance_dict = ambulance.dict(exclude_unset=True)
        db.ambulances.insert_one(ambulance_dict)
    # db.ambulances.insert_one(amb_data[0].dict())

def delete_ambulances() -> Tuple[str, str]:
    db.ambulances.delete_many({})

def login_hospital(username: str, password: str) -> Tuple[HospitalSchema, str]:
    # print('ddad')
    document = db.hospitals.find_one({"$and": [{"username": username}, {"password": password}]})

    # print('asas31312')
    if document:
        resp = HospitalSchema(**document)
        return resp, None
    else:
        return None, "Login failed"
    
def get_ambulances(id: ObjectId) -> Tuple[List[AmbulanceSchema], str]:
    query = {"hospital_id": id}

    # Query the database using the find method.
    cursor = db.ambulances.find(query)

    if cursor:
        ambulances = []

        for ambulance_doc in cursor:
            ambulance_doc['hospital_id'] = ObjectId(ambulance_doc['hospital_id'])
            ambulance = AmbulanceSchema(**ambulance_doc)
            ambulances.append(ambulance)

        return ambulances, None
    else:
        return None, "Error"

def login_ambulance(username: str, password: str) -> Tuple[HospitalSchema, str]:
    # print('ddad')
    document = db.ambulances.find_one({"$and": [{"username": username}, {"password": password}]})

    # print('asas31312')
    if document:
        document['hospital_id'] = ObjectId(document['hospital_id'])
        resp = AmbulanceSchema(**document)
        return resp, None
    else:
        return None, "Login failed"

def add_report(report: ReportSchema) -> Tuple[str, str]:
    db.reports.insert_one(report.dict())
    return '', None

def set_reported(id : ObjectId) -> Tuple[str, str]:
    filter = {"_id": id}
    update = {"$set": {"reported": True}}
    result = db.ambulances.update_one(filter, update)
    return "", None
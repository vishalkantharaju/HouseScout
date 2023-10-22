from flask import Blueprint, Response, jsonify
from typing import Tuple
from flask.views import MethodView
from datetime import datetime
from flask_cors import cross_origin
import shared.db.model as db_model
from shared.types.status import ErrorResponse
from flask_pydantic import validate
from shared.types.ambulance import GetAmbulanceRequest, GetAmbulanceResponse, GetAmbResponse, AmbulanceLoginRequest, AmbulanceLoginResponse
from shared.db.schema import AmbulanceSchema
from bson import ObjectId

ambulance_bp = Blueprint("ambulance", __name__)

class PopulateAmbulance(MethodView):
    def get(self) -> Tuple[str, str]:
        # body.university = ObjectId(body.university)
        
        # club = ClubSchema(
            # **body.dict(), reviewed=False, date_created=datetime.now(), date_modified=datetime.now(), rating = 0, numRatings = 0, stats=[body.meetings, body.memDues, body.app]
        # )
        # club.reviewed = False
        db_model.populate_ambulances()
        # _id, err = db_model.add_club(club)
        # if err is not None:
            # return jsonify(dict(ErrorResponse(err=err))), 400
        # Resp = CreateClubResponse(id=ObjectId(_id), success=True)
        # return jsonify(Resp.dict()), 201
        return "Success", "Hi"

class DeleteAmbulance(MethodView):
    def get(self) -> Tuple[str, str]:
        # body.university = ObjectId(body.university)
        
        # club = ClubSchema(
            # **body.dict(), reviewed=False, date_created=datetime.now(), date_modified=datetime.now(), rating = 0, numRatings = 0, stats=[body.meetings, body.memDues, body.app]
        # )
        # club.reviewed = False
        db_model.delete_ambulances()
        # _id, err = db_model.add_club(club)
        # if err is not None:
            # return jsonify(dict(ErrorResponse(err=err))), 400
        # Resp = CreateClubResponse(id=ObjectId(_id), success=True)
        # return jsonify(Resp.dict()), 201
        return "Success", "Hi"

class AmbulanceList(MethodView):
    @cross_origin(headers=["Content-Type", "Authorization"])
    @validate()
    def get(self, query : GetAmbulanceRequest)  -> Tuple[Response, int]:
        # print('asas')
        response, err = db_model.get_ambulances(query.id)
        # # print('asas')
        if err is not None:
            return jsonify(dict(ErrorResponse(err=err))), 404
        # # print('asas')
        resp = []
        for club in response:
            club.hospital_id = ObjectId(club.hospital_id)
            club.id = str(club.id)
            club.history = str(club.history)
            resp.append((GetAmbResponse(id=str(club.id), unit = club.unit, loc = [club.loc.x, club.loc.y], status = club.status, hospital_id = str(club.hospital_id), history = club.history, reported = club.reported, ))) 

        resp = GetAmbulanceResponse(ambulances = resp, success=True).dict()
        return jsonify(resp), 200
    
class VerifyAmbulance(MethodView):
    @cross_origin(headers=["Content-Type", "Authorization"])
    @validate()
    def get(self, query : AmbulanceLoginRequest) -> Tuple[Response, int]:
        response, err = db_model.login_ambulance(query.username, query.password)
        # print('asas')
        if err is not None:
            return jsonify(dict(ErrorResponse(err=err))), 404
        # print('asas')
        resp = AmbulanceLoginResponse(**response.dict(), success=True)
        return jsonify(dict(resp)), 200

ambulance_bp.add_url_rule("/populate", view_func=PopulateAmbulance.as_view("populate"), methods=["GET"])
ambulance_bp.add_url_rule("/delete", view_func=DeleteAmbulance.as_view("delete"), methods=["GET"])
ambulance_bp.add_url_rule("/list", view_func=AmbulanceList.as_view("list"), methods=['GET'])
ambulance_bp.add_url_rule("/login", view_func=VerifyAmbulance.as_view("login"), methods=['GET'])
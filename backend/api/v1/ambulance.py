from flask import Blueprint, Response, jsonify
from typing import Tuple
from flask.views import MethodView
from datetime import datetime
from flask_cors import cross_origin
import shared.db.model as db_model
from shared.types.status import ErrorResponse
# from flask_pydantic import validate
# from shared.types.ambulance import CreateClubRequest, CreateClubResponse, GetClubQuery, GetClubResponse, SearchClubQuery, SearchClubResponse, SearchClubInfo, GetPopularQuery, GetPopularInfo,  GetPopularResponse, GetTaggedQuery
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

# class AmbulanceList(MethodView):
#     def get(self) ->
    


ambulance_bp.add_url_rule("/populate", view_func=PopulateAmbulance.as_view("populate"), methods=["GET"])
ambulance_bp.add_url_rule("/delete", view_func=DeleteAmbulance.as_view("delete"), methods=["GET"])
from flask import Blueprint, Response, jsonify
from typing import Tuple
from flask.views import MethodView
from datetime import datetime
from flask_cors import cross_origin
import shared.db.model as db_model
from shared.types.status import ErrorResponse
from flask_pydantic import validate
from shared.types.report import NewReportRequest, NewReportResponse
from shared.db.schema import ReportSchema
from bson import ObjectId

report_bp = Blueprint("report", __name__)

class NewReport(MethodView):
    @cross_origin(headers=["Content-Type", "Authorization"])
    @validate()
    def post(self, body: NewReportRequest) -> Tuple[Response, int]:
        print('akda')
        report = ReportSchema(id = ObjectId(), ambulance_id = ObjectId(body.ambulance_id), gender = body.gender, age = body.age, heart_rate = body.heart_rate, resp_rate = body.resp_rate, sp = body.sp, bp = body.bp, bs = body.bs, sample = body.sample, date_created = datetime.now(), date_modified = datetime.now())
        _id, err = db_model.add_report(report)
        if err is not None:
            return jsonify(dict(ErrorResponse(err=err))), 400
        Resp = NewReportResponse(id=ObjectId(), success=True)
        db_model.set_reported(id = ObjectId(body.ambulance_id))
        return jsonify(Resp.dict()), 201


report_bp.add_url_rule("/create", view_func=NewReport.as_view("create"), methods=["POST"])
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CiudadControladorVerificar_1 = __importDefault(require("../controlador/CiudadControladorVerificar"));
const CiudadEsquema_1 = __importDefault(require("../../../compartido/esquema/CiudadEsquema"));
const Ciudad_1 = __importDefault(require("../../../compartido/entidad/Ciudad"));
class CiudadDAO {
    static consultar(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield CiudadEsquema_1.default.find();
            let base64 = "";
            let ciudades = [];
            respuesta.map((ciudad) => {
                base64 = CiudadControladorVerificar_1.default.obtenerBase64(ciudad.privadoFotoCiudad, 250);
                ciudades.push(new Ciudad_1.default(ciudad._id, ciudad.nombreCiudad, ciudad.publicoFotoCiudad, ciudad.privadoFotoCiudad, ciudad.estadoCiudad, base64));
            });
            res.status(200).json(ciudades);
        });
    }
}
exports.default = CiudadDAO;

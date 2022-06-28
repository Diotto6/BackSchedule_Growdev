"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagensEntity = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const uuid_1 = require("uuid");
let MensagensEntity = class MensagensEntity extends typeorm_1.BaseEntity {
    constructor(descrição, detalhes, user_id) {
        super();
        this.id = (0, uuid_1.v4)();
        this.descrição = descrição;
        this.detalhes = detalhes;
        this.user_id = user_id;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], MensagensEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensagensEntity.prototype, "descri\u00E7\u00E3o", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensagensEntity.prototype, "detalhes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MensagensEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.UserEntity, user => user.mensagens),
    (0, typeorm_1.JoinColumn)({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_1.UserEntity)
], MensagensEntity.prototype, "user", void 0);
MensagensEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Mensagens' }),
    __metadata("design:paramtypes", [String, String, String])
], MensagensEntity);
exports.MensagensEntity = MensagensEntity;

import express from "express";
import UserController from "../controller/admin/user";
// import { UserScreen } from "../controller/admin/user_screen";
// import { User } from "../controller/admin/user";
// import { UserRequest } from "../controller/admin/user_request";
// import { Screen } from "../controller/admin/screen";
// import { RequestScreen } from "../controller/admin/request_screen";


export default class Admin {
  constructor (app: express.Express) {
    const user = new UserController();
    // const user = new User;
    // const userScreen = new UserScreen;
    // const userRequest = new UserRequest;
    // const screen = new Screen;
    // const requestScreen = new RequestScreen;

    app.get("/user/listar",         user.listar)
    // app.get("/user/exibir/:id",     user.exibir)
    // app.put("/user/editar",         user.editar)
    // app.post("/user/salvar",        user.salvar)
    // app.delete("/user/deletar/:id", user.deletar)

    // app.get("/user-screen/listar",         userScreen.listar)
    // app.get("/user-screen/exibir/:id",     userScreen.exibir)
    // app.put("/user-screen/editar",         userScreen.editar)
    // app.post("/user-screen/salvar",        userScreen.salvar)
    // app.delete("/user-screen/deletar/:id", userScreen.deletar)

    // app.get("/user-request/listar",         userRequest.listar)
    // app.get("/user-request/exibir/:id",     userRequest.exibir)
    // app.put("/user-request/editar",         userRequest.editar)
    // app.post("/user-request/salvar",        userRequest.salvar)
    // app.delete("/user-request/deletar/:id", userRequest.deletar)

    // app.get("/screen/listar",         screen.listar)
    // app.get("/screen/exibir/:id",     screen.exibir)
    // app.put("/screen/editar",         screen.editar)
    // app.post("/screen/salvar",        screen.salvar)
    // app.delete("/screen/deletar/:id", screen.deletar)

    // app.get("/request-screen/listar",         requestScreen.listar)
    // app.get("/request-screen/exibir/:id",     requestScreen.exibir)
    // app.put("/request-screen/editar",         requestScreen.editar)
    // app.post("/request-screen/salvar",        requestScreen.salvar)
    // app.delete("/request-screen/deletar/:id", requestScreen.deletar)
  }
}

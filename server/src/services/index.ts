import { ModelService } from "./model.service";
import { CredOffer, Session, SiopOffer, User } from "@/models";

export const UsersService = new ModelService(User);
export const SessionsService = new ModelService(Session);
export const SiopOfferService = new ModelService(SiopOffer);
export const CredOfferService = new ModelService(CredOffer);

import { createTypedHooks } from "easy-peasy";
import GuestBookStore from "../interfaces/GuestBookStore";

const typedHooks = createTypedHooks<GuestBookStore>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

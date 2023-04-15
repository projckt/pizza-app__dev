import { state } from '../../../../global/script';

export const helper_Set_AccountDetails = payload_AccountDetails => {
  state.account_FirstName = payload_AccountDetails.name_First;
  state.account_LastName = payload_AccountDetails.name_Last;
  state.account_Email = payload_AccountDetails.email;
  state.isVerified_AccountEmail = payload_AccountDetails.isVerified_Email;
  state.isActive_Session = payload_AccountDetails.isActive_Session;
  state.isPublisher = payload_AccountDetails.isPublisher;
  state.host = payload_AccountDetails.host;
  state.origin = payload_AccountDetails.origin;

  console.log(`host   : ${state.host}`);
  console.log(`origin : ${state.origin}`);
};

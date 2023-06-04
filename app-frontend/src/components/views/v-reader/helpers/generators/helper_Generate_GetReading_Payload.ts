export const helper_Generate_GetReading_Payload = (id_Document: string) => {
  let payload_GetReading = {
    id_Document: id_Document.trim(),
  };

  return payload_GetReading;
};

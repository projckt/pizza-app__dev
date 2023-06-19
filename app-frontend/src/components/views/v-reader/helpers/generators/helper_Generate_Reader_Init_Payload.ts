export const helper_Generate_Reader_Init_Payload = (id_Document: string, no_Page: number, id_Socket: string) => {
  let payload_Reader_Init = {
    id_Document: id_Document.trim(),
    no_Page: no_Page,
    id_Socket: id_Socket.trim(),
  };

  return payload_Reader_Init;
};

export const helper_Generate_Get_Reader_Payload = (id_Document: string, no_Page: number, id_Socket: string) => {
  let payload_Get_Reader = {
    id_Document: id_Document.trim(),
    no_Page: no_Page,
    id_Socket: id_Socket,
  };

  return payload_Get_Reader;
};

export const helper_Generate_Get_Page_Payload = (id_Document: string, no_Page: number) => {
  let payload_Get_Page = {
    id_Document: id_Document.trim(),
    no_Page: no_Page,
  };

  return payload_Get_Page;
};

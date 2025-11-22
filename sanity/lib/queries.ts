export const COLLECTION_SECTION_QUERY = `
  *[_type == "collectionSection"][0]{
    sectionTitle,
    collectionTitle
  }
`;

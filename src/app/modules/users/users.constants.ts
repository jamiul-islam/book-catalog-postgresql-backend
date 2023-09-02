export const userFilterableFields: string[] = [
  'searchTerm',
  'name',
  'email',
  'password',
  'role',
  'contactNo',
  'address',
  'profileImage',
];

export const userSearchableFields: string[] = [
  'name',
  'email',
  'password',
  'role',
  'contactNo',
  'address',
  'profileImage',
];

export const userRelationalFields: string[] = ['review_rating', 'order'];

export const userRelationalFieldsMapper: { [key: string]: string } = {
  review_rating: 'reviewRating',
  order: 'order',
};

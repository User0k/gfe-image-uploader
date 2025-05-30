export interface ProfileDetails {
  companyName: string;
  jobTitle: string;
  companyIconUrl: string | null;
  nickName: string | null;
  pronouns: string | null;
}

export interface ProfileLocation {
  country: string;
  city: string;
}

export interface User extends ProfileDetails, ProfileLocation {
  name: string;
  images: Image[];
}

export interface Image {
  id: string;
  thumbNail: string;
  fullImage: string;
  originalName: string;
  size: number;
  width: number;
  height: number;
  selected: boolean;
  avatar: Avatar | null;
}

export interface Avatar {
  id: string;
  imageId: string;
  x: number;
  y: number;
  diameter: number;
}

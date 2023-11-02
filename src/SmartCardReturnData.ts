export interface SmartCardReturnData {
  citizenID: string
  titleTH: string
  titleEN: string
  fullNameTH: string
  fullNameEN: string
  firstNameTH: string
  firstNameEN: string
  lastNameTH: string
  lastNameEN: string
  dateOfBirth: string
  gender: "ชาย" | "หญิง"
  cardIssuer: string
  issueDate: string
  expireDate: string
  address: string
  photoAsBase64Uri: string
}

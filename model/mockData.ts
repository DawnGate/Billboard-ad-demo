import { ImplBillBoard, ImplCompany } from ".";

export const mockCompanies: ImplCompany[] = [
  {
    id: "1",
    name: "The Sigma",
    shortName: "TS",
    color: "#36BA98",
  },
  {
    id: "2",
    name: "P&G",
    shortName: "PG",
    color: "#E9C46A",
  },
  {
    id: "3",
    name: "Apple",
    shortName: "AP",
    color: "#45474B",
  },
];

export const mockBillboards: ImplBillBoard[] = [
  {
    id: "123",
    name: "Big Led Screen OutDoor, Dist 1",
    location: "A&B Tower - District 1, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0.15,
    cost: 500,
    booking: {
      company: mockCompanies[0],
      days: 10,
    },
  },
  {
    id: "124",
    name: "Small Led Screen InDoor, Dist 2",
    location: "Thiso Mall - District 2, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "08:00",
      to: "20:00",
      size: {
        mW: 5.8,
        mH: 5.9,
      },
    },
    discount: 0.1,
    cost: 200,
  },
  {
    id: "1234",
    name: "Big Led Screen OutDoor, Thao Cam Vien Zoo and Botanical Garden",
    location: "Sai gon Zoo - District 1, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0.07,
    cost: 500,
    booking: {
      company: mockCompanies[0],
      days: 10,
    },
  },
  {
    id: "1235",
    name: "Big Led Screen OutDoor, Dist 1",
    location: "Sonatus Building - District 1, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0.15,
    cost: 550,
  },
  {
    id: "1236",
    name: "Big Led Screen OutDoor, Thu Duc",
    location: "Xa Lo Ha Noi - Thu Duc, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0.15,
    cost: 350,
  },
  {
    id: "1237",
    name: "Big Led Screen OutDoor, Dist 1",
    location: "Vietcombank Tower - District 1, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0,
    cost: 700,
    booking: {
      company: mockCompanies[2],
      days: 10,
    },
  },
  {
    id: "1238",
    name: "Big Led Screen OutDoor, Dist 5",
    location: "Viettel Building - District 5, HCM",
    lat: 123,
    long: 123,
    led: {
      from: "06:00",
      to: "00:00",
      size: {
        mW: 14.4,
        mH: 19.5,
      },
    },
    discount: 0.05,
    cost: 550,
    booking: {
      company: mockCompanies[1],
      days: 10,
    },
  },
];

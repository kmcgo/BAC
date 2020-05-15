export const drinks =
[
    {
        type: "Liqor",
        name: "Captain Morgan",
        percent: 30
    },
    {
        type: "Beer",
        name: "Hamm's",
        percent: 4
    },
    {
        type: "Liqor",
        name: "Kirkland Vodka",
        percent: 40
    }
  ];

export type Drink = {
        name: string;
        type: string;
        percent: number;
}

export class Dummy {
    constructor(
      public name: string,
      public gender: string,
      public weight: number
    ) {  }
}
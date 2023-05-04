// a type is dependent on another type

type a1 = number;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null;
//nested conditional type
type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh; // 'wife1' | 'wife2'
// 'wife3' extends 'wife1' | 'wife2
type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife2 = CheckProperty<Sheikh, "girlfriend">;

// check korbe ei Sheikh Type a wife3 ase kina ? true : false

//Matha Kharap Example

type Bandhubi = "Monika" | "Rachel" | "Pheobe";

type RemoveBadhubi<T, K> = T extends K ? never : T;

type CurrentBandhubi = RemoveBadhubi<Bandhubi, "Rachel">;

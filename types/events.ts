export type Events = {
  id: number;
  title: string;
  description: string;
  eventDate: string;
  image: string;
  winning_price?: string;
  registrationLink: string;
  navigationPath: string;
  objective?: string;
  EntryFeeAndRegistration?: string[];
  ModeofOperation?: string[];
  instructor_name?: string;
  instructor_profession?: string;
  instructor_address?: string;
  instructor_email?: string;
  Giveaway?: string;
  registrationform?: string;
  workshopoutline?: string[];
  certificate?: string[];
  duration?: string;
  lists?: string[];
  quizTitle?: string;
  topicsCovered?: string[];
  rules?: string;
  rulesPoints?: string[];
  evaluations?: string[];
  first_prize?: string;
  second_prize?: string;
  evaluation_last_point?: string;
  last_points?: string[];
  eventsClosed?: false;
  extra?: string[]
};

// type QuizRounds = {
//   rapidFireROund: RapidFireRound[];
//   QandARound: QandARound[];
//   codingROund:CodingRound[];
// };

// type RapidFireRound = {
//   duration?: string;
//   lists?: string[];
// };

// type QandARound = {
//   duration?: string;
//   lists: string[];
// };

// type CodingRound = {

// }

// type Details = {
//   objective?: string;
//   EntryFeeAndRegistration?: string[];
//   ModeofOperation?: string[];
//   InstructorDetails?: InstructorDetails;
//   Giveaway?: string;
//   registrationform?: string;
// };

// type InstructorDetails = {
//   name?: string;
//   profession?: string;
//   address?: string;
//   email?: string;
// };

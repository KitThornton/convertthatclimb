export const French = "The French system is an internationally recognised system for grading sport " +
    "climbs and is therefore used on bolted routes within the UK."

export const UIAA = "The UIAA (International Climbing and Mountaineering Federation) system is used in Germany, in other areas of Eastern Europe and in Italy for " +
    "the classic trad routes."

export const YDS = "The Yosemite Decimal System is a grading system commonly found in the United States, " +
    "starts with a 5.something. Grades 1 to 4 refer to walks of increasing difficulty, by the time you reach 5 you are " +
    "assumed to be scrambling over rocks which equates to about 5.0.\n\n The sub-grade ranges from 1 to a theoretically " +
    "infinite number (today the highest number is 15). The number is increased when a ‘harder’ climb is developed."

export const BritishTrad = "The UK system is made of two sub-grades, an adjective grade and a technical grade. " +
    "The adjective grade describes the overall difficulty of the climb taking into consideration how strenuous the route" +
    " is, the amount of exposure and the availability of protection." +
    "\n\nThe adjective grades are as follows: Moderate (M), Very Difficult (VD), Hard Very Difficult HVD), Mild Severe (MS)," +
    " Severe (S), Hard Severe (HS), Mild Very Severe (MVS), Very Severe (VS), Hard Very Severe (HVS) and Extremely Severe (E)." +
    " The Extremely Severe grade is also broken down into 10 further sub grades from E1 to E11."

export const Australian = "This system is used in Australia and New Zealand and is perhaps the most logical of all. " +
    "There are no letters secondary grades, just a single number which gets bigger as the routes get harder."

export const BritishTechnicalTrad = "This grade is there to give an indication of the hardest move to be found on the route, " +
    "irrespective of how many of them there might be, how strenuous it is, or how frightened you are when you do it."

export const VGrade = "The V scale is an open-ended grading scale, meaning there is no top level of difficulty. Instead, the highest grade will increase as the sport of bouldering progresses. It starts at V0 and currently goes all the way up to V17.\n" +
    "\n" +
    "There is also a level called VB — the B stands for “basic” or “beginner” — that is easier than V0. Outdoors, you’ll occasionally see problems graded “V-Fun” or “V-Weird.” These are usually problems that defy normal grading standards and call for some weird climbing technique.\n" +
    "\n" +
    "The concept behind the V scale is simple: the higher the number, the harder the problem. Currently, the hardest boulder problems in the world are rated V16 and V17. Only a handful of people in the world can climb that hard. In climbing gyms, you usually see problems max out somewhere around V10.\n" +
    "\n" +
    "You will sometimes see a V grade postfixed with a “+” or “-” to further distinguish the difficulty of a problem"

export const FontGrade = "Like the V Scale, the Fontainebleau Scale is open-ended. The scale starts at 1 and progresses upwards. However, problems with grades easier than 3 are rarely found.\n" +
    "\n" +
    "The Font Scale is similar to the V Scale in that the higher the number, the more difficult the bouldering problem.\n" +
    "\n" +
    "Unlike the V Scale, once the Font Scale reaches the number 6, some funky things start to happen.\n" +
    "\n" +
    "At this point, rather than simply increasing the number when a climb gets more difficult, the scale adds certain suffixes to the number to indicate changes in difficulty.\n" +
    "\n" +
    "The first suffix is one of three letters: A, B, or C. The later the letter in the alphabet, the more difficult the climb. Thus, a 6C is harder than a 6B is harder than a 6A.\n" +
    "\n" +
    "Additionally, a “+” can be added after the letter to indicate another change in difficulty which is slighter than changing an entire letter grade. The presence of a plus means the problem is more difficult than the same number-letter combo without a plus. A 6A+ is harder than a 6A, while a 6B is more difficult than a 6A+."

export const BritishTechnicalBouldering = "In the UK, the system known as UK technical grades is occasionally used to rate a boulder problem. These run from 4a to 7b with steps of a, b and c before changing the initial number. This system is applied because these technical grades are used in the UK grading system for trad routes to represent the absolute difficulty of the hardest move. UK technical grades were only designed to describe the difficulty of a " +
    "single move making them unsuitable for grading boulders and V or Font grades are generally used instead."


export const systemToModalDict = {
    uiaa: UIAA,
    french: French,
    britishtrad: BritishTrad,
    australian: Australian,
    yds: YDS,
    britishtechnical: BritishTechnicalTrad,
    v: VGrade,
    britishtechnicalbouldering: BritishTechnicalBouldering,
    font: FontGrade
};


export const adjectivalGradeDict = {
    Mod: "Moderate",
    Diff: "Difficult",
    VD: "Very Difficult",
    HVD: "Hard Very Difficult",
    S: "Severe",
    HS: "Hard Severe",
    VS: "Very Severe",
    HVS: "Hard Very Severe",
    E1: "Extremely Severe 1",
    E2: "Extremely Severe 2",
    E3: "Extremely Severe 3",
    E4: "Extremely Severe 4",
    E5: "Extremely Severe 5",
    E6: "Extremely Severe 6",
}
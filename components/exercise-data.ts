export interface Exercise {
  id: string;
  name: string;
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  equipment: string;
  targetMuscles: string;
  description: string;
  instructions: string[];
  tips: string[];
  variations: string[];
}

export const exercises: Exercise[] = [
  {
    id: "b1",
    name: "Warrior I",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips, Full Body/Integrated, Legs - Thighs",
    description: "A foundational yoga pose that improves balance, strength, and flexibility throughout the body.",
    instructions: [
      "Stand with your feet hip-width apart, toes pointing forward and arms by your sides.",
      "Stiffen your abdominal muscles to stabilize your spine.",
      "Step your left foot back 3-4 feet, turning it out at a 45-degree angle.",
      "Bend your right knee over your ankle, keeping your thigh parallel to the floor.",
      "Keep your left leg straight and strong.",
      "Raise your arms overhead, palms facing each other.",
      "Hold the pose, then repeat on the other side."
    ],
    tips: [
      "Keep your front knee tracking over your ankle.",
      "Engage your core for stability.",
      "Press firmly through both feet.",
      "Keep your torso facing forward."
    ],
    variations: ["Warrior II", "Warrior III", "High Lunge"]
  },
  {
    id: "b2",
    name: "Cobra Exercise",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Abs, Back",
    description: "A back extension exercise that strengthens the lower back and stretches the abdominal muscles.",
    instructions: [
      "Lie prone (on your stomach) on an exercise mat or floor.",
      "Position your hands under your shoulders, palms facing forward.",
      "Extend your legs and point your toes.",
      "Press through your hands to lift your chest off the ground.",
      "Keep your hips in contact with the floor throughout the movement.",
      "Hold the position, then slowly lower down."
    ],
    tips: [
      "Start with small ranges of motion and gradually increase.",
      "Keep your shoulders away from your ears.",
      "Engage your glutes to protect your lower back.",
      "Breathe normally throughout the hold."
    ],
    variations: ["Sphinx Pose", "Seal Pose", "Upward Facing Dog"]
  },
  {
    id: "b3",
    name: "Child's Pose",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Abs, Back, Butt/Hips, Legs - Thighs",
    description: "A restorative yoga pose that gently stretches the back, hips, and thighs while promoting relaxation.",
    instructions: [
      "Start on your hands and knees in a tabletop position.",
      "Bring your big toes together and spread your knees wide.",
      "Sit back onto your heels.",
      "Lower your torso between your thighs.",
      "Extend your arms forward or rest them alongside your body.",
      "Rest your forehead on the floor.",
      "Hold the pose and breathe deeply."
    ],
    tips: [
      "Keep your hips back toward your heels.",
      "Allow your spine to lengthen.",
      "Relax your shoulders away from your ears.",
      "Breathe deeply into your back."
    ],
    variations: ["Extended Child's Pose", "Thread the Needle", "Supported Child's Pose"]
  },
  {
    id: "b4",
    name: "Kneeling Lat Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "Bench",
    targetMuscles: "Back",
    description: "A gentle stretch for the latissimus dorsi muscles that helps improve upper body mobility.",
    instructions: [
      "Kneel in front of a bench or chair.",
      "Place your hands on the bench, slightly wider than shoulder-width.",
      "Keep your arms straight and your back flat.",
      "Lower your chest toward the floor while keeping your hips over your knees.",
      "Feel the stretch in your back and shoulders.",
      "Hold the position, then return to starting position."
    ],
    tips: [
      "Keep your neck neutral.",
      "Don't round your back.",
      "Breathe deeply into the stretch.",
      "Adjust the height of the bench if needed."
    ],
    variations: ["Standing Lat Stretch", "Foam Roller Lat Stretch", "Doorway Lat Stretch"]
  },
  {
    id: "b5",
    name: "Glute Bridge",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Glutes, Hamstrings, Lower Back",
    description: "A foundational exercise to activate and strengthen the glutes and hamstrings.",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms at your sides, palms facing down.",
      "Press through your heels to lift your hips off the ground until your knees, hips, and shoulders form a straight line.",
      "Pause at the top, then slowly lower your hips back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged throughout the movement.",
      "Avoid arching your lower back excessively.",
      "Press evenly through both feet."
    ],
    variations: ["Single-Leg Glute Bridge", "Elevated Glute Bridge", "Banded Glute Bridge"]
  },
  {
    id: "b6",
    name: "Standing Calf Raise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Calves",
    description: "A simple exercise to strengthen the calf muscles.",
    instructions: [
      "Stand upright with your feet hip-width apart, arms at your sides or holding onto a support for balance.",
      "Slowly raise your heels off the ground as high as possible, balancing on the balls of your feet.",
      "Pause at the top, then lower your heels back to the ground with control.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Engage your core for balance.",
      "Do not let your ankles roll outward or inward."
    ],
    variations: ["Single-Leg Calf Raise", "Seated Calf Raise", "Calf Raise on Step"]
  },
  {
    id: "b7",
    name: "Wall Push-up",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A gentle push-up variation ideal for beginners to build upper body strength.",
    instructions: [
      "Stand facing a wall, arms extended and hands placed on the wall at shoulder height and width.",
      "Step your feet back so your body is at a slight angle.",
      "Bend your elbows to bring your chest toward the wall, keeping your body straight.",
      "Push back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged and body in a straight line.",
      "Do not let your hips sag or pike.",
      "Move slowly and with control."
    ],
    variations: ["Incline Push-up", "Knee Push-up", "Standard Push-up"]
  },
  {
    id: "b8",
    name: "Seated Knee Extension",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Quadriceps",
    description: "A beginner-friendly exercise to strengthen the quadriceps using a chair.",
    instructions: [
      "Sit tall in a chair with your feet flat on the floor and knees bent at 90 degrees.",
      "Slowly extend one leg out in front of you until it is straight, squeezing your thigh.",
      "Pause, then lower your foot back to the floor.",
      "Repeat for the desired number of repetitions, then switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not lock your knee at the top of the movement.",
      "Move slowly and with control."
    ],
    variations: ["Resistance Band Knee Extension", "Weighted Knee Extension", "Standing Knee Extension"]
  },
  {
    id: "b9",
    name: "Bent Knee Push-up",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Chest, Shoulders, Triceps, Core",
    description: "A push-up variation performed on the knees to reduce resistance and build upper body strength for beginners.",
    instructions: [
      "Start in a plank position with your knees on the ground and hands slightly wider than shoulder-width.",
      "Keep your body in a straight line from head to knees.",
      "Lower your chest toward the floor by bending your elbows.",
      "Push back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged and back flat.",
      "Do not let your hips sag or pike.",
      "Move slowly and with control."
    ],
    variations: ["Wall Push-up", "Incline Push-up", "Standard Push-up"]
  },
  {
    id: "b10",
    name: "Bodyweight Squat",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Abs, Butt/Hips, Legs - Calves and Shins, Legs - Thighs",
    description: "A foundational lower body exercise that strengthens the legs and glutes using only body weight.",
    instructions: [
      "Stand with feet shoulder-width apart, toes slightly turned out.",
      "Bend your knees and hips to lower your body as if sitting back into a chair.",
      "Keep your chest up and knees tracking over your toes.",
      "Lower until your thighs are parallel to the floor, then press through your heels to return to standing.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your weight in your heels.",
      "Do not let your knees collapse inward.",
      "Keep your chest lifted and back straight."
    ],
    variations: ["Chair Squat", "Wall Sit", "Goblet Squat"]
  },
  {
    id: "b11",
    name: "Cat-Cow Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Chest, Core",
    description: "A gentle yoga sequence that improves flexibility and mobility of the spine.",
    instructions: [
      "Start on your hands and knees in a tabletop position.",
      "Inhale, arch your back and lift your head and tailbone toward the ceiling (Cow Pose).",
      "Exhale, round your back and tuck your chin and pelvis (Cat Pose).",
      "Continue to alternate between Cat and Cow with each breath."
    ],
    tips: [
      "Move slowly and with your breath.",
      "Keep your shoulders away from your ears.",
      "Focus on full range of motion."
    ],
    variations: ["Seated Cat-Cow", "Standing Cat-Cow"]
  },
  {
    id: "b12",
    name: "Crunch",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Abs",
    description: "A classic abdominal exercise that targets the rectus abdominis.",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Place your hands behind your head or across your chest.",
      "Lift your shoulders off the floor, engaging your abs.",
      "Lower back down with control.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Do not pull on your neck.",
      "Keep your lower back pressed into the floor.",
      "Exhale as you lift, inhale as you lower."
    ],
    variations: ["Reverse Crunch", "Bicycle Crunch", "Oblique Crunch"]
  },
  {
    id: "b13",
    name: "Contralateral Limb Raises",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Butt/Hips, Shoulders",
    description: "A core stability exercise that strengthens the back and glutes by lifting opposite arm and leg.",
    instructions: [
      "Start on your hands and knees in a tabletop position.",
      "Extend your right arm forward and left leg back, keeping hips and shoulders level.",
      "Hold briefly, then return to start and switch sides.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your back sag or arch excessively.",
      "Move slowly and with control."
    ],
    variations: ["Bird Dog", "Plank with Arm/Leg Lift"]
  },
  {
    id: "b14",
    name: "Ankle Flexion",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Legs - Calves and Shins",
    description: "A simple exercise to strengthen the muscles of the lower leg using resistance bands.",
    instructions: [
      "Sit with your legs extended and loop a resistance band around the ball of your foot.",
      "Hold the ends of the band and flex your ankle, pulling your toes toward your shin.",
      "Slowly return to the starting position.",
      "Repeat for the desired number of repetitions, then switch feet."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Do not let the band snap back.",
      "Keep your knee straight."
    ],
    variations: ["Standing Ankle Flexion", "Seated Ankle Dorsiflexion"]
  },
  {
    id: "b15",
    name: "Calf Raise (Machine)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Weight Machines / Selectorized",
    targetMuscles: "Legs - Calves and Shins",
    description: "A beginner-friendly calf exercise performed on a weight machine.",
    instructions: [
      "Sit or stand on the calf raise machine with the balls of your feet on the platform.",
      "Press through your toes to lift your heels as high as possible.",
      "Pause at the top, then lower your heels back down with control.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Adjust the machine for your height.",
      "Move slowly and avoid bouncing.",
      "Keep your knees slightly bent."
    ],
    variations: ["Standing Calf Raise", "Single-Leg Calf Raise"]
  },
  {
    id: "b16",
    name: "Chest Press (Barbell/Bench)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Barbell, Bench",
    targetMuscles: "Arms, Chest, Shoulders",
    description: "A classic upper body exercise performed with a barbell and bench to strengthen the chest, shoulders, and triceps.",
    instructions: [
      "Lie on a bench with your feet flat on the floor.",
      "Grip the barbell with hands slightly wider than shoulder-width.",
      "Lower the bar to your chest, then press it back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your wrists straight and elbows at a 45-degree angle.",
      "Do not bounce the bar off your chest.",
      "Use a spotter if needed."
    ],
    variations: ["Dumbbell Chest Press", "Incline Chest Press", "Push-up"]
  },
  {
    id: "b17",
    name: "Lat Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back",
    description: "A gentle stretch for the latissimus dorsi muscles to improve upper body mobility.",
    instructions: [
      "Stand or sit tall and reach one arm overhead.",
      "Bend at the waist to the opposite side, feeling a stretch along your side and back.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not lean forward or backward.",
      "Keep your core engaged.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Kneeling Lat Stretch", "Foam Roller Lat Stretch"]
  },
  {
    id: "b18",
    name: "Seated Row (Resistance Bands)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Back, Arms",
    description: "A beginner-friendly row exercise using resistance bands to strengthen the back and arms.",
    instructions: [
      "Sit with your legs extended and loop a resistance band around your feet.",
      "Hold the ends of the band with both hands, arms extended.",
      "Pull the band toward your torso, squeezing your shoulder blades together.",
      "Slowly return to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your back straight and chest lifted.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Machine Seated Row", "Dumbbell Row"]
  },
  {
    id: "b19",
    name: "Bird Dog",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Core, Butt/Hips, Shoulders",
    description: "A core stability exercise that improves balance and coordination by extending opposite arm and leg.",
    instructions: [
      "Start on your hands and knees in a tabletop position.",
      "Extend your right arm forward and left leg back, keeping hips and shoulders level.",
      "Hold briefly, then return to start and switch sides.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your back sag or arch excessively.",
      "Move slowly and with control."
    ],
    variations: ["Contralateral Limb Raises", "Plank with Arm/Leg Lift"]
  },
  {
    id: "b20",
    name: "Bridge Exercise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Glutes, Hamstrings, Lower Back",
    description: "A foundational exercise to activate and strengthen the glutes and hamstrings.",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms at your sides, palms facing down.",
      "Press through your heels to lift your hips off the ground until your knees, hips, and shoulders form a straight line.",
      "Pause at the top, then slowly lower your hips back to the starting position.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged throughout the movement.",
      "Avoid arching your lower back excessively.",
      "Press evenly through both feet."
    ],
    variations: ["Single-Leg Glute Bridge", "Elevated Glute Bridge", "Banded Glute Bridge"]
  },
  {
    id: "b21",
    name: "Wall Sit",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A static lower body exercise that builds endurance in the thighs and glutes.",
    instructions: [
      "Stand with your back against a wall and feet shoulder-width apart, about two feet from the wall.",
      "Slide down the wall until your knees are bent at 90 degrees, as if sitting in a chair.",
      "Hold this position for the desired time, keeping your back flat against the wall.",
      "Push through your heels to return to standing."
    ],
    tips: [
      "Keep your knees directly above your ankles.",
      "Do not let your knees collapse inward.",
      "Keep your core engaged."
    ],
    variations: ["Single-Leg Wall Sit", "Wall Sit with Calf Raise"]
  },
  {
    id: "b22",
    name: "Plank",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Core, Shoulders, Back",
    description: "A core stabilization exercise that strengthens the abdominals, back, and shoulders.",
    instructions: [
      "Start on your forearms and toes, elbows under shoulders, body in a straight line from head to heels.",
      "Engage your core and hold this position for the desired time.",
      "Do not let your hips sag or pike."
    ],
    tips: [
      "Keep your neck neutral and gaze down.",
      "Breathe steadily.",
      "Squeeze your glutes and thighs."
    ],
    variations: ["Knee Plank", "Side Plank", "Plank with Arm Lift"]
  },
  {
    id: "b23",
    name: "Dead Bug",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Core",
    description: "A core exercise that improves stability and coordination by moving opposite arm and leg while keeping the back flat.",
    instructions: [
      "Lie on your back with arms extended toward the ceiling and knees bent at 90 degrees.",
      "Slowly lower your right arm and left leg toward the floor while keeping your back flat.",
      "Return to start and repeat on the other side."
    ],
    tips: [
      "Keep your lower back pressed into the floor.",
      "Move slowly and with control.",
      "Breathe steadily."
    ],
    variations: ["Weighted Dead Bug", "Dead Bug with Stability Ball"]
  },
  {
    id: "b24",
    name: "Marching in Place",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Full Body/Integrated",
    description: "A low-impact cardio exercise that raises the heart rate and warms up the body.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Lift one knee toward your chest while swinging the opposite arm forward.",
      "Lower and repeat on the other side, marching in place."
    ],
    tips: [
      "Keep your core engaged.",
      "Land softly on your feet.",
      "Increase speed for a greater challenge."
    ],
    variations: ["High Knees", "Butt Kicks"]
  },
  {
    id: "b25",
    name: "Step-up (Box)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Raised Platform/Box",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A functional lower body exercise that strengthens the legs and glutes using a box or step.",
    instructions: [
      "Stand facing a box or step with feet hip-width apart.",
      "Step up with one foot, pressing through your heel to lift your body onto the box.",
      "Step down with the opposite foot and repeat, alternating legs."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not push off the trailing leg.",
      "Use a sturdy platform."
    ],
    variations: ["Lateral Step-up", "Step-up with Knee Raise"]
  },
  {
    id: "b26",
    name: "Shoulder Press (Dumbbells)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Arms",
    description: "A beginner-friendly upper body exercise that strengthens the shoulders and arms using dumbbells.",
    instructions: [
      "Sit or stand with a dumbbell in each hand at shoulder height, palms facing forward.",
      "Press the dumbbells overhead until your arms are fully extended.",
      "Lower back to shoulder height and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Shoulder Press", "Arnold Press"]
  },
  {
    id: "b27",
    name: "Biceps Curl (Dumbbells)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A classic arm exercise that strengthens the biceps using dumbbells.",
    instructions: [
      "Stand with a dumbbell in each hand, arms at your sides, palms facing forward.",
      "Bend your elbows to curl the weights toward your shoulders.",
      "Lower back down with control and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Hammer Curl", "Barbell Curl"]
  },
  {
    id: "b28",
    name: "Triceps Extension (Dumbbells)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A beginner-friendly exercise to strengthen the triceps using dumbbells.",
    instructions: [
      "Stand or sit with a dumbbell in each hand, arms extended overhead.",
      "Bend your elbows to lower the weights behind your head.",
      "Extend your arms back to the starting position and repeat."
    ],
    tips: [
      "Keep your elbows close to your head.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Overhead Triceps Extension", "Triceps Kickback"]
  },
  {
    id: "b29",
    name: "Side Lying Leg Lift",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Butt/Hips",
    description: "A simple exercise to strengthen the hip abductors and outer thighs.",
    instructions: [
      "Lie on your side with legs extended and stacked.",
      "Lift your top leg upward, keeping it straight.",
      "Lower back down with control and repeat, then switch sides."
    ],
    tips: [
      "Keep your hips stacked and core engaged.",
      "Do not let your top hip roll backward.",
      "Move slowly and with control."
    ],
    variations: ["Clamshell", "Standing Hip Abduction"]
  },
  {
    id: "b30",
    name: "Clamshell",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips",
    description: "A hip strengthening exercise that targets the gluteus medius and minimus.",
    instructions: [
      "Lie on your side with knees bent and legs stacked.",
      "Keeping your feet together, lift your top knee as high as possible without moving your pelvis.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your hips stacked and core engaged.",
      "Do not let your pelvis roll backward.",
      "Move slowly and with control."
    ],
    variations: ["Banded Clamshell", "Side Lying Leg Lift"]
  },
  {
    id: "b31",
    name: "Standing Hip Abduction",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A standing exercise to strengthen the hip abductors and outer thighs.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one leg out to the side, keeping it straight and foot flexed.",
      "Lower back down with control and repeat, then switch sides."
    ],
    tips: [
      "Keep your torso upright and core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hip Abduction", "Side Lying Leg Lift"]
  },
  {
    id: "b32",
    name: "Standing Hip Extension",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips, Hamstrings",
    description: "A standing exercise to strengthen the glutes and hamstrings by extending the hip.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one leg straight back without arching your back.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged and torso upright.",
      "Do not arch your lower back.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hip Extension", "Quadruped Hip Extension"]
  },
  {
    id: "b33",
    name: "Standing Hip Flexion",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Hip Flexors, Abs",
    description: "A standing exercise to strengthen the hip flexors and improve balance.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one knee toward your chest, keeping your torso upright.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lean back.",
      "Move slowly and with control."
    ],
    variations: ["Marching in Place", "Seated Knee Raise"]
  },
  {
    id: "b34",
    name: "Heel Slide",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Hip Flexors",
    description: "A gentle exercise to improve knee and hip mobility and strengthen the thighs.",
    instructions: [
      "Lie on your back with legs extended.",
      "Slowly slide one heel toward your buttocks, bending the knee.",
      "Slide the heel back to the starting position and repeat, then switch legs."
    ],
    tips: [
      "Keep your foot in contact with the floor.",
      "Move slowly and with control.",
      "Do not force the range of motion."
    ],
    variations: ["Seated Heel Slide", "Standing Heel Slide"]
  },
  {
    id: "b35",
    name: "Seated Leg Curl",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Hamstrings",
    description: "A beginner-friendly exercise to strengthen the hamstrings using a chair.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Slowly slide one foot back under the chair, bending the knee.",
      "Return to the starting position and repeat, then switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Move slowly and with control.",
      "Do not force the range of motion."
    ],
    variations: ["Standing Leg Curl", "Prone Leg Curl"]
  },
  {
    id: "b36",
    name: "Seated Calf Raise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Calves",
    description: "A simple exercise to strengthen the calf muscles while seated.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Raise your heels off the ground as high as possible, keeping toes on the floor.",
      "Lower your heels back down and repeat."
    ],
    tips: [
      "Move slowly and with control.",
      "Keep your knees bent at 90 degrees.",
      "Engage your core for balance."
    ],
    variations: ["Standing Calf Raise", "Single-Leg Seated Calf Raise"]
  },
  {
    id: "b37",
    name: "Standing Knee Flexion",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Hamstrings",
    description: "A standing exercise to strengthen the hamstrings by bending the knee.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Bend one knee to bring your heel toward your buttocks.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your thighs aligned.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Banded Knee Flexion", "Prone Leg Curl"]
  },
  {
    id: "b38",
    name: "Standing Knee Extension",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Quadriceps",
    description: "A standing exercise to strengthen the quadriceps by straightening the knee.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one foot off the ground and extend your knee to straighten your leg.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lock your knee at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Knee Extension", "Banded Knee Extension"]
  },
  {
    id: "b39",
    name: "Standing Calf Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Calves",
    description: "A stretch to improve flexibility in the calf muscles.",
    instructions: [
      "Stand facing a wall, place your hands on the wall at shoulder height.",
      "Step one foot back and press the heel into the floor, keeping the back leg straight.",
      "Hold the stretch, then switch sides."
    ],
    tips: [
      "Keep your back knee straight.",
      "Do not bounce during the stretch.",
      "Breathe deeply."
    ],
    variations: ["Seated Calf Stretch", "Downward Dog Calf Stretch"]
  },
  {
    id: "b40",
    name: "Standing Quad Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Quadriceps",
    description: "A stretch to improve flexibility in the front of the thigh.",
    instructions: [
      "Stand tall and hold onto a support for balance if needed.",
      "Bend one knee and bring your heel toward your buttocks, grasping your ankle with your hand.",
      "Hold the stretch, then switch sides."
    ],
    tips: [
      "Keep your knees together.",
      "Do not arch your back.",
      "Breathe deeply."
    ],
    variations: ["Side Lying Quad Stretch", "Prone Quad Stretch"]
  },
  {
    id: "b41",
    name: "Seated March",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Full Body/Integrated",
    description: "A low-impact cardio exercise performed while seated to improve circulation and warm up the body.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor and arms at your sides.",
      "Lift one knee toward your chest, then lower it back down.",
      "Alternate legs in a marching motion."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Seated High Knees", "Seated Heel Tap"]
  },
  {
    id: "b42",
    name: "Seated Side Leg Lift",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A beginner exercise to strengthen the hip abductors while seated.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Lift one leg out to the side, keeping it straight.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Standing Side Leg Lift", "Seated Hip Abduction"]
  },
  {
    id: "b43",
    name: "Seated Hip Abduction",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A hip strengthening exercise performed while seated to target the outer thighs.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor and knees together.",
      "Press your knees outward against resistance (band or hands).",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not let your feet leave the floor.",
      "Move slowly and with control."
    ],
    variations: ["Standing Hip Abduction", "Banded Hip Abduction"]
  },
  {
    id: "b44",
    name: "Seated Hip Adduction",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Legs - Thighs, Adductors",
    description: "A hip strengthening exercise performed while seated to target the inner thighs.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor and knees apart.",
      "Press your knees together against resistance (ball or hands).",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not let your feet leave the floor.",
      "Move slowly and with control."
    ],
    variations: ["Standing Hip Adduction", "Banded Hip Adduction"]
  },
  {
    id: "b45",
    name: "Seated Toe Tap",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Legs - Calves and Shins",
    description: "A simple exercise to activate the muscles in the lower leg while seated.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Lift your toes off the floor while keeping your heels down, then tap them back down.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Standing Toe Tap", "Heel Walk"]
  },
  {
    id: "b46",
    name: "Seated Heel Tap",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Legs - Calves and Shins",
    description: "A simple exercise to activate the muscles in the lower leg while seated.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Lift your heels off the floor while keeping your toes down, then tap them back down.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Standing Heel Tap", "Toe Walk"]
  },
  {
    id: "b47",
    name: "Seated Arm Curl",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Dumbbells (optional)",
    targetMuscles: "Arms",
    description: "A beginner-friendly biceps curl performed while seated, with or without dumbbells.",
    instructions: [
      "Sit tall in a chair with arms at your sides.",
      "Bend your elbows to curl your hands or dumbbells toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Move slowly and with control.",
      "Engage your core for balance."
    ],
    variations: ["Standing Arm Curl", "Hammer Curl"]
  },
  {
    id: "b48",
    name: "Seated Overhead Press",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Dumbbells (optional)",
    targetMuscles: "Shoulders, Arms",
    description: "A beginner-friendly overhead press performed while seated, with or without dumbbells.",
    instructions: [
      "Sit tall in a chair with arms at your sides, holding dumbbells if desired.",
      "Press the dumbbells overhead until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Standing Overhead Press", "Arnold Press"]
  },
  {
    id: "b49",
    name: "Seated Chest Press (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band anchored behind you.",
      "Hold the ends of the band and press your arms forward until fully extended.",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your wrists straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Standing Chest Press", "Dumbbell Chest Press"]
  },
  {
    id: "b50",
    name: "Seated Row (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Back, Arms",
    description: "A row exercise performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your feet.",
      "Hold the ends of the band and pull your arms back, squeezing your shoulder blades together.",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your back straight and chest lifted.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Standing Row", "Dumbbell Row"]
  },
  {
    id: "b51",
    name: "Seated Lateral Raise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Dumbbells (optional)",
    targetMuscles: "Shoulders",
    description: "A beginner-friendly shoulder exercise performed while seated, with or without dumbbells.",
    instructions: [
      "Sit tall in a chair with arms at your sides, holding dumbbells if desired.",
      "Lift your arms out to the sides until they are parallel to the floor.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Standing Lateral Raise", "Front Raise"]
  },
  {
    id: "b52",
    name: "Seated Front Raise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Dumbbells (optional)",
    targetMuscles: "Shoulders",
    description: "A beginner-friendly shoulder exercise performed while seated, with or without dumbbells.",
    instructions: [
      "Sit tall in a chair with arms at your sides, holding dumbbells if desired.",
      "Lift your arms straight in front of you to shoulder height.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Standing Front Raise", "Lateral Raise"]
  },
  {
    id: "b53",
    name: "Seated Reverse Fly",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Dumbbells (optional)",
    targetMuscles: "Shoulders, Back",
    description: "A beginner-friendly exercise to strengthen the rear shoulders and upper back while seated.",
    instructions: [
      "Sit tall in a chair, hinge forward at the hips, arms hanging down, holding dumbbells if desired.",
      "Lift your arms out to the sides, squeezing your shoulder blades together.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your back flat and core engaged.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Standing Reverse Fly", "Bent Over Fly"]
  },
  {
    id: "b54",
    name: "Seated Leg Extension (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Quadriceps",
    description: "A beginner-friendly leg extension performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your ankle and anchored behind you.",
      "Extend your leg forward until it is straight, then lower back down.",
      "Repeat and switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not lock your knee at the top.",
      "Move slowly and with control."
    ],
    variations: ["Standing Leg Extension", "Machine Leg Extension"]
  },
  {
    id: "b55",
    name: "Seated Leg Curl (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Hamstrings",
    description: "A beginner-friendly leg curl performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your ankle and anchored in front of you.",
      "Bend your knee to bring your heel under the chair, then return to start.",
      "Repeat and switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Move slowly and with control.",
      "Do not force the range of motion."
    ],
    variations: ["Standing Leg Curl", "Machine Leg Curl"]
  },
  {
    id: "b56",
    name: "Seated Hip Flexion (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Hip Flexors, Abs",
    description: "A beginner-friendly hip flexion exercise performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your ankle and anchored behind you.",
      "Lift your knee toward your chest against the resistance, then lower back down.",
      "Repeat and switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Move slowly and with control.",
      "Do not force the range of motion."
    ],
    variations: ["Standing Hip Flexion", "Marching in Place"]
  },
  {
    id: "b57",
    name: "Seated Hip Extension (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Butt/Hips, Hamstrings",
    description: "A beginner-friendly hip extension exercise performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your ankle and anchored in front of you.",
      "Extend your leg backward against the resistance, then return to start.",
      "Repeat and switch legs."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Move slowly and with control.",
      "Do not force the range of motion."
    ],
    variations: ["Standing Hip Extension", "Quadruped Hip Extension"]
  },
  {
    id: "b58",
    name: "Seated Hip Abduction (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A hip strengthening exercise performed while seated using resistance bands to target the outer thighs.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your knees.",
      "Press your knees outward against the band, then return to start.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not let your feet leave the floor.",
      "Move slowly and with control."
    ],
    variations: ["Standing Hip Abduction", "Banded Hip Abduction"]
  },
  {
    id: "b59",
    name: "Seated Hip Adduction (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Legs - Thighs, Adductors",
    description: "A hip strengthening exercise performed while seated using resistance bands to target the inner thighs.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your knees.",
      "Press your knees together against the band, then return to start.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not let your feet leave the floor.",
      "Move slowly and with control."
    ],
    variations: ["Standing Hip Adduction", "Banded Hip Adduction"]
  },
  {
    id: "b60",
    name: "Seated Ankle Dorsiflexion (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Chair, Resistance Bands/Cables",
    targetMuscles: "Legs - Calves and Shins",
    description: "A beginner-friendly ankle dorsiflexion exercise performed while seated using resistance bands.",
    instructions: [
      "Sit tall in a chair with a resistance band looped around your foot and anchored in front of you.",
      "Pull your toes toward your shin against the resistance, then return to start.",
      "Repeat and switch feet."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Do not let the band snap back.",
      "Keep your knee straight."
    ],
    variations: ["Standing Ankle Dorsiflexion", "Ankle Flexion"]
  },
  {
    id: "b61",
    name: "Standing Biceps Curl (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Arms",
    description: "A beginner-friendly biceps curl performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at your sides.",
      "Bend your elbows to curl your hands toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the band.",
      "Move slowly and with control."
    ],
    variations: ["Seated Arm Curl", "Dumbbell Curl"]
  },
  {
    id: "b62",
    name: "Standing Triceps Extension (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Arms",
    description: "A beginner-friendly triceps extension performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles overhead.",
      "Bend your elbows to lower the handles behind your head.",
      "Extend your arms back to the starting position and repeat."
    ],
    tips: [
      "Keep your elbows close to your head.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Seated Triceps Extension", "Dumbbell Triceps Extension"]
  },
  {
    id: "b63",
    name: "Standing Shoulder Press (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Shoulders, Arms",
    description: "A beginner-friendly shoulder press performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at shoulder height.",
      "Press the handles overhead until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Overhead Press", "Dumbbell Shoulder Press"]
  },
  {
    id: "b64",
    name: "Standing Lateral Raise (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Shoulders",
    description: "A beginner-friendly lateral raise performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at your sides.",
      "Lift your arms out to the sides until they are parallel to the floor.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Seated Lateral Raise", "Dumbbell Lateral Raise"]
  },
  {
    id: "b65",
    name: "Standing Front Raise (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Shoulders",
    description: "A beginner-friendly front raise performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at your sides.",
      "Lift your arms straight in front of you to shoulder height.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not swing the band.",
      "Move slowly and with control."
    ],
    variations: ["Seated Front Raise", "Dumbbell Front Raise"]
  },
  {
    id: "b66",
    name: "Standing Reverse Fly (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Shoulders, Back",
    description: "A beginner-friendly reverse fly performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles in front of you.",
      "Lift your arms out to the sides, squeezing your shoulder blades together.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your back flat and core engaged.",
      "Do not swing the band.",
      "Move slowly and with control."
    ],
    variations: ["Seated Reverse Fly", "Dumbbell Reverse Fly"]
  },
  {
    id: "b67",
    name: "Standing Row (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Back, Arms",
    description: "A beginner-friendly row performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles in front of you.",
      "Pull the handles toward your torso, squeezing your shoulder blades together.",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your back straight and chest lifted.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Seated Row", "Dumbbell Row"]
  },
  {
    id: "b68",
    name: "Standing Chest Press (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A beginner-friendly chest press performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart, resistance band anchored behind you, holding the handles at chest height.",
      "Press the handles forward until your arms are fully extended.",
      "Return to starting position and repeat."
    ],
    tips: [
      "Keep your wrists straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Chest Press", "Dumbbell Chest Press"]
  },
  {
    id: "b69",
    name: "Standing Hip Abduction (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A hip strengthening exercise performed standing using resistance bands to target the outer thighs.",
    instructions: [
      "Stand tall with a resistance band looped around your ankles.",
      "Lift one leg out to the side against the resistance, then return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your torso upright and core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Seated Hip Abduction", "Banded Hip Abduction"]
  },
  {
    id: "b70",
    name: "Standing Hip Adduction (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Legs - Thighs, Adductors",
    description: "A hip strengthening exercise performed standing using resistance bands to target the inner thighs.",
    instructions: [
      "Stand tall with a resistance band looped around your ankles.",
      "Bring one leg across your body against the resistance, then return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your torso upright and core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Seated Hip Adduction", "Banded Hip Adduction"]
  },
  {
    id: "b71",
    name: "Standing Hip Flexion (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Hip Flexors, Abs",
    description: "A hip flexion exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your ankle and anchored behind you.",
      "Lift your knee toward your chest against the resistance, then lower back down.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lean back.",
      "Move slowly and with control."
    ],
    variations: ["Seated Hip Flexion", "Marching in Place"]
  },
  {
    id: "b72",
    name: "Standing Hip Extension (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Butt/Hips, Hamstrings",
    description: "A hip extension exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your ankle and anchored in front of you.",
      "Extend your leg backward against the resistance, then return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your core engaged and torso upright.",
      "Do not arch your lower back.",
      "Move slowly and with control."
    ],
    variations: ["Seated Hip Extension", "Quadruped Hip Extension"]
  },
  {
    id: "b73",
    name: "Standing Knee Flexion (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Hamstrings",
    description: "A knee flexion exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your ankle and anchored in front of you.",
      "Bend your knee to bring your heel toward your buttocks against the resistance, then return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your thighs aligned.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Seated Leg Curl", "Prone Leg Curl"]
  },
  {
    id: "b74",
    name: "Standing Knee Extension (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Quadriceps",
    description: "A knee extension exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your ankle and anchored behind you.",
      "Extend your knee to straighten your leg against the resistance, then return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lock your knee at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Knee Extension", "Machine Leg Extension"]
  },
  {
    id: "b75",
    name: "Standing Ankle Dorsiflexion (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Legs - Calves and Shins",
    description: "An ankle dorsiflexion exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your foot and anchored in front of you.",
      "Pull your toes toward your shin against the resistance, then return to start.",
      "Repeat and switch feet."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Do not let the band snap back.",
      "Keep your knee straight."
    ],
    variations: ["Seated Ankle Dorsiflexion", "Ankle Flexion"]
  },
  {
    id: "b76",
    name: "Standing Calf Raise (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Calves",
    description: "A calf raise exercise performed standing using resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at your sides.",
      "Raise your heels off the ground as high as possible, balancing on the balls of your feet.",
      "Lower your heels back to the ground with control."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Engage your core for balance.",
      "Do not let your ankles roll outward or inward."
    ],
    variations: ["Seated Calf Raise", "Single-Leg Calf Raise"]
  },
  {
    id: "b77",
    name: "Standing Toe Tap (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Legs - Calves and Shins",
    description: "A toe tap exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your foot and anchored behind you.",
      "Lift your toes off the floor against the resistance, then tap them back down.",
      "Repeat and switch feet."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Seated Toe Tap", "Heel Walk"]
  },
  {
    id: "b78",
    name: "Standing Heel Tap (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Legs - Calves and Shins",
    description: "A heel tap exercise performed standing using resistance bands.",
    instructions: [
      "Stand tall with a resistance band looped around your foot and anchored in front of you.",
      "Lift your heels off the floor against the resistance, then tap them back down.",
      "Repeat and switch feet."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Seated Heel Tap", "Toe Walk"]
  },
  {
    id: "b79",
    name: "Standing Arm Curl (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Arms",
    description: "A biceps curl exercise performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at your sides.",
      "Bend your elbows to curl your hands toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the band.",
      "Move slowly and with control."
    ],
    variations: ["Seated Arm Curl", "Dumbbell Curl"]
  },
  {
    id: "b80",
    name: "Standing Overhead Press (Band)",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Shoulders, Arms",
    description: "An overhead press exercise performed standing with resistance bands.",
    instructions: [
      "Stand with feet hip-width apart on the center of a resistance band, holding the handles at shoulder height.",
      "Press the handles overhead until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Overhead Press", "Dumbbell Shoulder Press"]
  },
  {
    id: "b81",
    name: "Standing March with Arm Swing",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Full Body/Integrated",
    description: "A low-impact cardio exercise that raises the heart rate and warms up the body, performed standing with arm swings.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Lift one knee toward your chest while swinging the opposite arm forward.",
      "Lower and repeat on the other side, marching in place and swinging arms."
    ],
    tips: [
      "Keep your core engaged.",
      "Land softly on your feet.",
      "Increase speed for a greater challenge."
    ],
    variations: ["High Knees", "Butt Kicks"]
  },
  {
    id: "b82",
    name: "Standing Side Step",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Full Body/Integrated",
    description: "A low-impact cardio exercise that involves stepping side to side to increase heart rate and coordination.",
    instructions: [
      "Stand tall with feet together and arms at your sides.",
      "Step to the right with your right foot, then bring your left foot to meet it.",
      "Repeat to the left, alternating sides."
    ],
    tips: [
      "Keep your knees slightly bent.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Grapevine Step", "Side Shuffle"]
  },
  {
    id: "b83",
    name: "Standing Heel Dig",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Calves and Shins, Legs - Thighs",
    description: "A low-impact cardio move that targets the lower body and helps with coordination.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Extend your right heel forward, digging it into the floor while flexing your foot.",
      "Return to start and repeat with the left heel, alternating sides."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Move at a steady pace.",
      "Add an arm swing for more intensity."
    ],
    variations: ["Toe Tap", "Step Touch"]
  },
  {
    id: "b84",
    name: "Standing Butt Kick",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Hamstrings",
    description: "A cardio exercise that targets the hamstrings and increases heart rate by kicking heels toward the glutes.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Bend your right knee to bring your heel toward your glutes.",
      "Return to start and repeat with the left leg, alternating sides."
    ],
    tips: [
      "Keep your knees close together.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Jogging Butt Kicks", "Standing March"]
  },
  {
    id: "b85",
    name: "Standing High Knee",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Abs",
    description: "A cardio exercise that targets the thighs and core by lifting knees high toward the chest.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Lift your right knee toward your chest, then lower it back down.",
      "Repeat with the left knee, alternating sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Running High Knees", "Marching in Place"]
  },
  {
    id: "b86",
    name: "Standing Step Touch",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Full Body/Integrated",
    description: "A simple cardio move that involves stepping side to side and touching the floor with your foot.",
    instructions: [
      "Stand tall with feet together.",
      "Step to the right with your right foot, then touch the floor with your left foot.",
      "Repeat to the left, alternating sides."
    ],
    tips: [
      "Keep your knees slightly bent.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Side Step", "Grapevine Step"]
  },
  {
    id: "b87",
    name: "Standing Grapevine Step",
    category: "Cardio",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Full Body/Integrated",
    description: "A dance-inspired cardio move that improves coordination and agility.",
    instructions: [
      "Stand tall with feet together.",
      "Step to the right with your right foot, cross your left foot behind, step right again, then tap left.",
      "Repeat to the left, alternating sides."
    ],
    tips: [
      "Keep your knees slightly bent.",
      "Move at a steady pace.",
      "Swing your arms for added intensity."
    ],
    variations: ["Step Touch", "Side Shuffle"]
  },
  {
    id: "b88",
    name: "Standing Side Leg Lift",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips, Legs - Thighs",
    description: "A simple exercise to strengthen the hip abductors and outer thighs while standing.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one leg out to the side, keeping it straight and foot flexed.",
      "Lower back down with control and repeat, then switch sides."
    ],
    tips: [
      "Keep your torso upright and core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hip Abduction", "Side Lying Leg Lift"]
  },
  {
    id: "b89",
    name: "Standing Rear Leg Lift",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Butt/Hips, Hamstrings",
    description: "A simple exercise to strengthen the glutes and hamstrings by lifting the leg behind the body.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one leg straight back without arching your back.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged and torso upright.",
      "Do not arch your lower back.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hip Extension", "Quadruped Hip Extension"]
  },
  {
    id: "b90",
    name: "Standing Inner Thigh Lift",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Adductors",
    description: "A simple exercise to strengthen the inner thighs by lifting the leg across the body.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one leg across your body, keeping it straight.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lean to the side.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hip Adduction", "Side Lying Inner Thigh Lift"]
  },
  {
    id: "b91",
    name: "Standing Hamstring Curl",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Hamstrings",
    description: "A simple exercise to strengthen the hamstrings by curling the heel toward the glutes.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Bend one knee to bring your heel toward your glutes.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your thighs aligned.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Banded Hamstring Curl", "Prone Leg Curl"]
  },
  {
    id: "b92",
    name: "Standing Quad Extension",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Quadriceps",
    description: "A simple exercise to strengthen the quadriceps by extending the knee while standing.",
    instructions: [
      "Stand tall with feet hip-width apart, hands on hips or holding a support for balance.",
      "Lift one foot off the ground and extend your knee to straighten your leg.",
      "Lower back down and repeat, then switch sides."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not lock your knee at the top.",
      "Move slowly and with control."
    ],
    variations: ["Seated Knee Extension", "Banded Knee Extension"]
  },
  {
    id: "b93",
    name: "Standing Calf Raise with Support",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Calves",
    description: "A calf raise exercise performed standing while holding onto a support for balance.",
    instructions: [
      "Stand tall with feet hip-width apart, holding onto a support for balance.",
      "Raise your heels off the ground as high as possible, balancing on the balls of your feet.",
      "Lower your heels back to the ground with control."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Engage your core for balance.",
      "Do not let your ankles roll outward or inward."
    ],
    variations: ["Single-Leg Calf Raise", "Seated Calf Raise"]
  },
  {
    id: "b94",
    name: "Standing Toe Raise",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Calves and Shins",
    description: "A simple exercise to strengthen the muscles in the front of the lower leg by raising the toes off the ground.",
    instructions: [
      "Stand tall with feet hip-width apart, holding onto a support for balance if needed.",
      "Lift your toes off the ground while keeping your heels down, then lower them back down.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Seated Toe Raise", "Heel Walk"]
  },
  {
    id: "b95",
    name: "Standing Heel Walk",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Legs - Calves and Shins",
    description: "A simple exercise to strengthen the muscles in the front of the lower leg by walking on the heels.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Lift your toes off the ground and walk forward on your heels for the desired distance or time.",
      "Lower your toes back down and repeat as needed."
    ],
    tips: [
      "Keep your movements controlled.",
      "Do not rock your body.",
      "Engage your core for balance."
    ],
    variations: ["Toe Walk", "Seated Toe Raise"]
  },
  {
    id: "b96",
    name: "Standing Toe Walk",
    category: "Strength Training",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Calves",
    description: "A simple exercise to strengthen the calf muscles by walking on the toes.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Raise your heels off the ground and walk forward on your toes for the desired distance or time.",
      "Lower your heels back down and repeat as needed."
    ],
    tips: [
      "Keep your movements slow and controlled.",
      "Engage your core for balance.",
      "Do not let your ankles roll outward or inward."
    ],
    variations: ["Heel Walk", "Seated Calf Raise"]
  },
  {
    id: "b97",
    name: "Standing Side Bend Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Abs, Obliques",
    description: "A stretch to improve flexibility in the sides of the torso and lower back.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Reach one arm overhead and bend to the opposite side, feeling a stretch along your side.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not lean forward or backward.",
      "Keep your core engaged.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Side Bend", "Standing Overhead Reach"]
  },
  {
    id: "b98",
    name: "Standing Overhead Reach",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Shoulders, Abs",
    description: "A stretch to improve flexibility in the upper body by reaching overhead.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Reach both arms overhead, stretching upward as far as possible.",
      "Hold, then lower your arms and repeat."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not arch your back.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Overhead Reach", "Standing Side Bend"]
  },
  {
    id: "b99",
    name: "Standing Chest Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Chest, Shoulders",
    description: "A stretch to improve flexibility in the chest and shoulders.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Clasp your hands behind your back and lift your arms slightly, opening your chest.",
      "Hold the stretch, then release."
    ],
    tips: [
      "Do not arch your back.",
      "Keep your shoulders down and away from your ears.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Doorway Chest Stretch", "Seated Chest Stretch"]
  },
  {
    id: "b100",
    name: "Standing Shoulder Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Shoulders",
    description: "A stretch to improve flexibility in the shoulders.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Bring one arm across your chest and use the opposite hand to gently pull it closer.",
      "Hold the stretch, then switch arms."
    ],
    tips: [
      "Do not rotate your torso.",
      "Keep your shoulders down and away from your ears.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Shoulder Stretch", "Standing Triceps Stretch"]
  },
  {
    id: "b101",
    name: "Standing Triceps Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Triceps, Shoulders",
    description: "A stretch to improve flexibility in the triceps and shoulders.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Reach one arm overhead and bend the elbow, reaching down your back.",
      "Use the opposite hand to gently press the elbow for a deeper stretch.",
      "Hold, then switch arms."
    ],
    tips: [
      "Do not arch your back.",
      "Keep your head neutral.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Triceps Stretch", "Standing Shoulder Stretch"]
  },
  {
    id: "b102",
    name: "Standing Wrist Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Forearms, Wrists",
    description: "A stretch to improve flexibility in the wrists and forearms.",
    instructions: [
      "Stand tall with feet hip-width apart and arms extended in front of you, palms up.",
      "Use the opposite hand to gently pull back on the fingers, stretching the wrist and forearm.",
      "Hold, then switch hands."
    ],
    tips: [
      "Do not force the stretch.",
      "Keep your arm straight.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Wrist Stretch", "Standing Finger Stretch"]
  },
  {
    id: "b103",
    name: "Standing Finger Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Fingers, Hands",
    description: "A stretch to improve flexibility in the fingers and hands.",
    instructions: [
      "Stand tall with feet hip-width apart and arms extended in front of you.",
      "Use the opposite hand to gently pull back on each finger, stretching the hand and fingers.",
      "Hold, then switch hands."
    ],
    tips: [
      "Do not force the stretch.",
      "Keep your arm straight.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Finger Stretch", "Standing Wrist Stretch"]
  },
  {
    id: "b104",
    name: "Standing Neck Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Neck",
    description: "A stretch to improve flexibility in the neck muscles.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Gently tilt your head to one side, bringing your ear toward your shoulder.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not rotate your head.",
      "Keep your shoulders relaxed.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Neck Stretch", "Standing Upper Trap Stretch"]
  },
  {
    id: "b105",
    name: "Standing Upper Trap Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Neck, Shoulders",
    description: "A stretch to improve flexibility in the upper trapezius and neck.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Gently tilt your head to one side and use the opposite hand to apply gentle pressure.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not rotate your head.",
      "Keep your shoulders relaxed.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Upper Trap Stretch", "Standing Neck Stretch"]
  },
  {
    id: "b106",
    name: "Standing Levator Scapulae Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Neck, Shoulders",
    description: "A stretch to improve flexibility in the levator scapulae muscle of the neck.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Turn your head to one side and look down toward your armpit.",
      "Use the same-side hand to gently pull your head further into the stretch.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not force the stretch.",
      "Keep your shoulders relaxed.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Levator Scapulae Stretch", "Standing Neck Stretch"]
  },
  {
    id: "b107",
    name: "Standing Chin Tuck",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Neck",
    description: "A stretch to improve flexibility and posture in the neck by tucking the chin.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Gently tuck your chin toward your chest, lengthening the back of your neck.",
      "Hold, then release."
    ],
    tips: [
      "Do not force the stretch.",
      "Keep your shoulders relaxed.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Seated Chin Tuck", "Standing Neck Stretch"]
  },
  {
    id: "b108",
    name: "Standing Pec Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Chest, Shoulders",
    description: "A stretch to improve flexibility in the pectoral muscles and shoulders.",
    instructions: [
      "Stand tall with feet hip-width apart and arms at your sides.",
      "Place your forearm against a wall or doorway and gently turn your body away to stretch the chest.",
      "Hold, then switch sides."
    ],
    tips: [
      "Do not arch your back.",
      "Keep your shoulders down and away from your ears.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Doorway Pec Stretch", "Seated Chest Stretch"]
  },
  {
    id: "b109",
    name: "Standing Lat Stretch (Wall)",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "None",
    targetMuscles: "Back, Shoulders",
    description: "A stretch to improve flexibility in the latissimus dorsi and shoulders using a wall for support.",
    instructions: [
      "Stand tall facing a wall, place your hands on the wall above your head.",
      "Lean forward, keeping your arms straight, until you feel a stretch in your back and shoulders.",
      "Hold, then release."
    ],
    tips: [
      "Do not lean forward or backward.",
      "Keep your core engaged.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Kneeling Lat Stretch", "Standing Overhead Reach"]
  },
  {
    id: "b110",
    name: "Standing Wall Angel",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "Wall",
    targetMuscles: "Back, Shoulders",
    description: "A stretch and mobility exercise to improve posture and flexibility in the back and shoulders using a wall.",
    instructions: [
      "Stand with your back against a wall, feet a few inches from the wall.",
      "Press your lower back, upper back, and head against the wall.",
      "Raise your arms to form a 'W' shape, then slowly slide them up to a 'Y' and back down.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged and back flat against the wall.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Seated Wall Angel", "Standing Overhead Reach"]
  },
  {
    id: "b111",
    name: "Seated Spinal Twist",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Back, Obliques",
    description: "A gentle seated stretch to improve spinal mobility and flexibility in the back and obliques.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Place your right hand on the outside of your left thigh and your left hand on the back of the chair.",
      "Gently twist your torso to the left, looking over your left shoulder.",
      "Hold, then switch sides."
    ],
    tips: [
      "Keep your back straight and shoulders relaxed.",
      "Do not force the twist.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Standing Spinal Twist", "Supine Spinal Twist"]
  },
  {
    id: "b112",
    name: "Seated Figure Four Stretch",
    category: "Flexibility",
    difficulty: "beginner",
    equipment: "Chair",
    targetMuscles: "Butt/Hips, Back",
    description: "A seated stretch to improve flexibility in the hips and glutes.",
    instructions: [
      "Sit tall in a chair with feet flat on the floor.",
      "Cross your right ankle over your left knee, keeping your right foot flexed.",
      "Gently press down on your right knee and lean forward slightly to deepen the stretch.",
      "Hold, then switch sides."
    ],
    tips: [
      "Keep your back straight and core engaged.",
      "Do not force the stretch.",
      "Breathe deeply during the stretch."
    ],
    variations: ["Supine Figure Four Stretch", "Standing Figure Four Stretch"]
  },
  // --- INTERMEDIATE EXERCISES ---
  {
    id: "i1",
    name: "Push-up to Side Plank",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "None",
    targetMuscles: "Chest, Shoulders, Triceps, Core",
    description: "A compound exercise combining a push-up with a side plank to build upper body and core strength.",
    instructions: [
      "Start in a push-up position with hands slightly wider than shoulder-width.",
      "Lower your chest to the floor, then push back up.",
      "Rotate into a side plank, reaching one arm toward the ceiling.",
      "Return to push-up position and repeat, alternating sides."
    ],
    tips: [
      "Keep your body in a straight line.",
      "Engage your core throughout.",
      "Move slowly and with control."
    ],
    variations: ["Knee Push-up to Side Plank", "Push-up with Rotation"]
  },
  {
    id: "i2",
    name: "Reverse Lunge with Knee Drive",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A dynamic lower body exercise that combines a reverse lunge with a knee drive for balance and power.",
    instructions: [
      "Stand tall with feet hip-width apart.",
      "Step back into a reverse lunge, lowering your back knee toward the floor.",
      "Push through your front foot to stand and drive your back knee up toward your chest.",
      "Repeat on the other side."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not let your front knee go past your toes.",
      "Move with control and balance."
    ],
    variations: ["Reverse Lunge", "Lunge with Hop"]
  },
  {
    id: "i3",
    name: "Plank with Shoulder Tap",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "None",
    targetMuscles: "Core, Shoulders, Chest",
    description: "A core stability exercise performed in a plank position while tapping opposite shoulders.",
    instructions: [
      "Start in a high plank position with hands under shoulders.",
      "Tap your right hand to your left shoulder while keeping hips stable.",
      "Return to plank and repeat with the other hand."
    ],
    tips: [
      "Keep your hips level and avoid rocking.",
      "Engage your core throughout.",
      "Move slowly and with control."
    ],
    variations: ["Knee Plank with Shoulder Tap", "Plank with Arm Lift"]
  },
  {
    id: "i4",
    name: "Single-Leg Glute Bridge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "None",
    targetMuscles: "Glutes, Hamstrings, Core",
    description: "A glute bridge variation performed on one leg to increase intensity and challenge stability.",
    instructions: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Lift one leg off the ground, keeping it straight.",
      "Press through the heel of the other foot to lift your hips.",
      "Lower back down and repeat, then switch legs."
    ],
    tips: [
      "Keep your hips level.",
      "Engage your core and glutes.",
      "Do not arch your lower back."
    ],
    variations: ["Glute Bridge", "Elevated Glute Bridge"]
  },
  {
    id: "i5",
    name: "Dumbbell Romanian Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A hip hinge exercise that targets the hamstrings and glutes using dumbbells.",
    instructions: [
      "Stand with feet hip-width apart, holding dumbbells in front of your thighs.",
      "Hinge at the hips, lowering the dumbbells while keeping your back flat.",
      "Lower until you feel a stretch in your hamstrings, then return to standing."
    ],
    tips: [
      "Keep your knees slightly bent.",
      "Do not round your back.",
      "Move slowly and with control."
    ],
    variations: ["Barbell Romanian Deadlift", "Single-Leg Romanian Deadlift"]
  },
  {
    id: "i6",
    name: "TRX Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "TRX",
    targetMuscles: "Back, Arms, Core",
    description: "A suspension training exercise that targets the back and arms while engaging the core.",
    instructions: [
      "Hold the TRX handles and lean back with arms extended.",
      "Pull your chest toward the handles, squeezing your shoulder blades together.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your body in a straight line.",
      "Engage your core throughout.",
      "Move slowly and with control."
    ],
    variations: ["Inverted Row", "TRX High Row"]
  },
  {
    id: "i7",
    name: "Medicine Ball Slam",
    category: "Power",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Full Body/Integrated",
    description: "A power exercise that involves slamming a medicine ball to the ground to build explosive strength.",
    instructions: [
      "Stand with feet shoulder-width apart, holding a medicine ball overhead.",
      "Forcefully slam the ball to the ground in front of you.",
      "Pick up the ball and repeat."
    ],
    tips: [
      "Engage your core and use your whole body.",
      "Do not round your back.",
      "Move explosively but with control."
    ],
    variations: ["Overhead Slam", "Rotational Slam"]
  },
  {
    id: "i8",
    name: "BOSU Ball Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "BOSU Trainer",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed on a BOSU ball to challenge balance and stability.",
    instructions: [
      "Stand on the flat side of a BOSU ball with feet shoulder-width apart.",
      "Lower into a squat, keeping your chest up and knees tracking over your toes.",
      "Return to standing and repeat."
    ],
    tips: [
      "Engage your core for balance.",
      "Move slowly and with control.",
      "Use a spotter if needed."
    ],
    variations: ["Bodyweight Squat", "BOSU Ball Lunge"]
  },
  {
    id: "i9",
    name: "Stability Ball Rollout",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Stability Ball",
    targetMuscles: "Core, Shoulders",
    description: "A core exercise that uses a stability ball to challenge the abdominals and shoulders.",
    instructions: [
      "Kneel on the floor with hands on a stability ball.",
      "Roll the ball forward, extending your body while keeping your core engaged.",
      "Roll the ball back to the starting position."
    ],
    tips: [
      "Do not let your hips sag.",
      "Move slowly and with control.",
      "Keep your core tight throughout."
    ],
    variations: ["Ab Wheel Rollout", "Stability Ball Pike"]
  },
  {
    id: "i10",
    name: "Step-up with Knee Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Raised Platform/Box",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A step-up variation that adds a knee raise for balance and core engagement.",
    instructions: [
      "Stand facing a box or step with feet hip-width apart.",
      "Step up with your right foot, pressing through your heel to lift your body onto the box.",
      "Drive your left knee up toward your chest at the top.",
      "Step down and repeat, alternating sides."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not push off the trailing leg.",
      "Use a sturdy platform."
    ],
    variations: ["Step-up", "Lateral Step-up"]
  },
  {
    id: "i11",
    name: "Split Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "None",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A single-leg squat variation that targets the thighs and glutes.",
    instructions: [
      "Stand with one foot forward and one foot back, feet hip-width apart.",
      "Lower your back knee toward the floor, keeping your front knee over your ankle.",
      "Push through your front heel to return to standing.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your torso upright.",
      "Do not let your front knee go past your toes.",
      "Move slowly and with control."
    ],
    variations: ["Bulgarian Split Squat", "Reverse Lunge"]
  },
  {
    id: "i12",
    name: "Bulgarian Split Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bench",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A challenging single-leg squat performed with the rear foot elevated on a bench.",
    instructions: [
      "Stand facing away from a bench, place your rear foot on the bench.",
      "Lower your back knee toward the floor, keeping your front knee over your ankle.",
      "Push through your front heel to return to standing.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your torso upright.",
      "Do not let your front knee go past your toes.",
      "Move slowly and with control."
    ],
    variations: ["Split Squat", "Reverse Lunge"]
  },
  {
    id: "i13",
    name: "Dumbbell Chest Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells, Bench",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press performed with dumbbells on a bench for increased range of motion.",
    instructions: [
      "Lie on a bench with a dumbbell in each hand at chest level.",
      "Press the dumbbells up until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your wrists straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Barbell Chest Press", "Incline Dumbbell Press"]
  },
  {
    id: "i14",
    name: "Incline Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bench",
    targetMuscles: "Chest, Shoulders, Triceps, Core",
    description: "A push-up variation performed with hands elevated on a bench to reduce resistance.",
    instructions: [
      "Place your hands on a bench, feet on the floor, body in a straight line.",
      "Lower your chest toward the bench, then push back up.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your hips sag.",
      "Move slowly and with control."
    ],
    variations: ["Push-up", "Decline Push-up"]
  },
  {
    id: "i15",
    name: "Decline Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bench",
    targetMuscles: "Chest, Shoulders, Triceps, Core",
    description: "A push-up variation performed with feet elevated on a bench to increase resistance.",
    instructions: [
      "Place your feet on a bench, hands on the floor, body in a straight line.",
      "Lower your chest toward the floor, then push back up.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your hips sag.",
      "Move slowly and with control."
    ],
    variations: ["Push-up", "Incline Push-up"]
  },
  {
    id: "i16",
    name: "Dumbbell Shoulder Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder press performed with dumbbells for increased range of motion and stability challenge.",
    instructions: [
      "Sit or stand with a dumbbell in each hand at shoulder height.",
      "Press the dumbbells overhead until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Barbell Shoulder Press", "Arnold Press"]
  },
  {
    id: "i17",
    name: "Arnold Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder press variation that involves rotating the wrists for greater shoulder activation.",
    instructions: [
      "Sit or stand with a dumbbell in each hand, palms facing you at shoulder height.",
      "Rotate your wrists as you press the dumbbells overhead, ending with palms facing forward.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Shoulder Press", "Barbell Shoulder Press"]
  },
  {
    id: "i18",
    name: "Dumbbell Lateral Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders",
    description: "A shoulder exercise that targets the lateral deltoids using dumbbells.",
    instructions: [
      "Stand with a dumbbell in each hand at your sides.",
      "Lift your arms out to the sides until they are parallel to the floor.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not shrug your shoulders.",
      "Move slowly and with control."
    ],
    variations: ["Cable Lateral Raise", "Seated Lateral Raise"]
  },
  {
    id: "i19",
    name: "Dumbbell Front Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders",
    description: "A shoulder exercise that targets the front deltoids using dumbbells.",
    instructions: [
      "Stand with a dumbbell in each hand at your sides.",
      "Lift your arms straight in front of you to shoulder height.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows slightly bent.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Cable Front Raise", "Seated Front Raise"]
  },
  {
    id: "i20",
    name: "Dumbbell Reverse Fly",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Back",
    description: "A shoulder and upper back exercise performed with dumbbells.",
    instructions: [
      "Stand with a dumbbell in each hand, hinge forward at the hips.",
      "Lift your arms out to the sides, squeezing your shoulder blades together.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your back flat and core engaged.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Cable Reverse Fly", "Seated Reverse Fly"]
  },
  {
    id: "i21",
    name: "Dumbbell Biceps Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A biceps curl performed with dumbbells for increased range of motion.",
    instructions: [
      "Stand with a dumbbell in each hand, arms at your sides, palms facing forward.",
      "Bend your elbows to curl the weights toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Barbell Curl", "Hammer Curl"]
  },
  {
    id: "i22",
    name: "Dumbbell Hammer Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A biceps curl variation performed with a neutral grip to target the brachialis.",
    instructions: [
      "Stand with a dumbbell in each hand, arms at your sides, palms facing each other.",
      "Bend your elbows to curl the weights toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Biceps Curl", "Barbell Curl"]
  },
  {
    id: "i23",
    name: "Dumbbell Triceps Extension",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A triceps extension performed with dumbbells for increased range of motion.",
    instructions: [
      "Stand or sit with a dumbbell in each hand, arms extended overhead.",
      "Bend your elbows to lower the weights behind your head.",
      "Extend your arms back to the starting position and repeat."
    ],
    tips: [
      "Keep your elbows close to your head.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Overhead Triceps Extension", "Triceps Kickback"]
  },
  {
    id: "i24",
    name: "Dumbbell Triceps Kickback",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A triceps exercise performed by extending the arm behind the body with a dumbbell.",
    instructions: [
      "Stand with a dumbbell in each hand, hinge forward at the hips.",
      "Bend your elbows to 90 degrees, then extend your arms behind you.",
      "Return to start and repeat."
    ],
    tips: [
      "Keep your upper arms still.",
      "Do not swing the weights.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Triceps Extension", "Cable Triceps Kickback"]
  },
  {
    id: "i25",
    name: "Dumbbell Overhead Triceps Extension",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A triceps extension performed overhead with dumbbells for increased range of motion.",
    instructions: [
      "Stand or sit with a dumbbell in each hand, arms extended overhead.",
      "Bend your elbows to lower the weights behind your head.",
      "Extend your arms back to the starting position and repeat."
    ],
    tips: [
      "Keep your elbows close to your head.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Triceps Extension", "Triceps Kickback"]
  },
  {
    id: "i26",
    name: "Dumbbell Concentration Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Arms",
    description: "A biceps curl performed seated, focusing on isolating the biceps.",
    instructions: [
      "Sit on a bench with legs apart, hold a dumbbell in one hand.",
      "Rest your elbow on your inner thigh and curl the weight toward your shoulder.",
      "Lower back down and repeat, then switch arms."
    ],
    tips: [
      "Keep your upper arm still.",
      "Do not swing the weight.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Biceps Curl", "Hammer Curl"]
  },
  {
    id: "i27",
    name: "Dumbbell Lunge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A lunge performed while holding dumbbells for added resistance.",
    instructions: [
      "Stand with feet hip-width apart, holding a dumbbell in each hand at your sides.",
      "Step forward with one foot and lower your back knee toward the floor.",
      "Push through your front heel to return to standing.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not let your front knee go past your toes.",
      "Move slowly and with control."
    ],
    variations: ["Bodyweight Lunge", "Reverse Lunge"]
  },
  {
    id: "i28",
    name: "Dumbbell Step-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells, Raised Platform/Box",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A step-up performed while holding dumbbells for added resistance.",
    instructions: [
      "Stand facing a box or step with a dumbbell in each hand at your sides.",
      "Step up with your right foot, pressing through your heel to lift your body onto the box.",
      "Step down and repeat, alternating sides."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not push off the trailing leg.",
      "Use a sturdy platform."
    ],
    variations: ["Bodyweight Step-up", "Lateral Step-up"]
  },
  {
    id: "i29",
    name: "Dumbbell Bulgarian Split Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells, Bench",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A Bulgarian split squat performed while holding dumbbells for added resistance.",
    instructions: [
      "Stand facing away from a bench, place your rear foot on the bench, holding dumbbells at your sides.",
      "Lower your back knee toward the floor, keeping your front knee over your ankle.",
      "Push through your front heel to return to standing.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your torso upright.",
      "Do not let your front knee go past your toes.",
      "Move slowly and with control."
    ],
    variations: ["Bulgarian Split Squat", "Reverse Lunge"]
  },
  {
    id: "i30",
    name: "Barbell Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A classic strength exercise that targets the posterior chain using a barbell.",
    instructions: [
      "Stand with feet hip-width apart, barbell over mid-foot.",
      "Grip the bar just outside your knees, hinge at the hips and bend your knees.",
      "Lift the bar by extending your hips and knees, keeping your back flat.",
      "Lower the bar back to the ground with control."
    ],
    tips: [
      "Keep the bar close to your body.",
      "Do not round your back.",
      "Engage your core throughout."
    ],
    variations: ["Romanian Deadlift", "Sumo Deadlift"]
  },
  {
    id: "i31",
    name: "Barbell Back Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Lower Back",
    description: "A squat performed with a barbell on the upper back for increased resistance.",
    instructions: [
      "Stand with feet shoulder-width apart, barbell resting on your upper back.",
      "Lower into a squat, keeping your chest up and knees tracking over your toes.",
      "Push through your heels to return to standing."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your knees collapse inward.",
      "Move slowly and with control."
    ],
    variations: ["Front Squat", "Goblet Squat"]
  },
  {
    id: "i32",
    name: "Barbell Front Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed with a barbell on the front of the shoulders for increased core demand.",
    instructions: [
      "Stand with feet shoulder-width apart, barbell resting on the front of your shoulders.",
      "Lower into a squat, keeping your chest up and elbows high.",
      "Push through your heels to return to standing."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not let your knees collapse inward.",
      "Move slowly and with control."
    ],
    variations: ["Back Squat", "Goblet Squat"]
  },
  {
    id: "i33",
    name: "Barbell Romanian Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A hip hinge exercise that targets the hamstrings and glutes using a barbell.",
    instructions: [
      "Stand with feet hip-width apart, holding a barbell in front of your thighs.",
      "Hinge at the hips, lowering the barbell while keeping your back flat.",
      "Lower until you feel a stretch in your hamstrings, then return to standing."
    ],
    tips: [
      "Keep your knees slightly bent.",
      "Do not round your back.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Romanian Deadlift", "Single-Leg Romanian Deadlift"]
  },
  {
    id: "i34",
    name: "Barbell Overhead Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A shoulder press performed with a barbell for increased resistance and core challenge.",
    instructions: [
      "Stand with feet hip-width apart, barbell at shoulder height.",
      "Press the barbell overhead until your arms are fully extended.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged and back straight.",
      "Do not lock your elbows at the top.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Shoulder Press", "Push Press"]
  },
  {
    id: "i35",
    name: "Barbell Bent Over Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Back, Arms, Core",
    description: "A row performed with a barbell to target the back and arms.",
    instructions: [
      "Stand with feet hip-width apart, hinge forward at the hips, barbell in hands.",
      "Pull the barbell toward your torso, squeezing your shoulder blades together.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your back flat and core engaged.",
      "Do not swing the barbell.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Row", "Pendlay Row"]
  },
  {
    id: "i36",
    name: "Barbell Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Arms",
    description: "A biceps curl performed with a barbell for increased resistance.",
    instructions: [
      "Stand with feet hip-width apart, barbell in hands, arms at your sides.",
      "Bend your elbows to curl the barbell toward your shoulders.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the barbell.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Curl", "EZ Bar Curl"]
  },
  {
    id: "i37",
    name: "Barbell Skullcrusher",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Arms",
    description: "A triceps extension performed lying on a bench with a barbell.",
    instructions: [
      "Lie on a bench with a barbell in hands, arms extended over chest.",
      "Bend your elbows to lower the barbell toward your forehead.",
      "Extend your arms back to the starting position and repeat."
    ],
    tips: [
      "Keep your elbows close to your head.",
      "Do not arch your back.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Skullcrusher", "EZ Bar Skullcrusher"]
  },
  {
    id: "i38",
    name: "Barbell Upright Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder and arm exercise performed by pulling a barbell up to chest height.",
    instructions: [
      "Stand with feet hip-width apart, barbell in hands in front of thighs.",
      "Pull the barbell up toward your chest, keeping elbows higher than wrists.",
      "Lower back down and repeat."
    ],
    tips: [
      "Keep your core engaged.",
      "Do not swing the barbell.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Upright Row", "Cable Upright Row"]
  },
  {
    id: "i39",
    name: "Barbell Lunge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A lunge performed with a barbell for added resistance.",
    instructions: [
      "Stand with feet hip-width apart, barbell on your upper back.",
      "Step forward with one foot and lower your back knee toward the floor.",
      "Push through your front heel to return to standing.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep your chest up and core engaged.",
      "Do not let your front knee go past your toes.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Lunge", "Reverse Lunge"]
  },
  {
    id: "i40",
    name: "Barbell Hip Thrust",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Bench",
    targetMuscles: "Glutes, Hamstrings",
    description: "A glute-focused exercise performed with a barbell across the hips while seated on the ground with upper back supported on a bench.",
    instructions: [
      "Sit on the ground with your upper back against a bench, barbell across your hips.",
      "Bend your knees and place feet flat on the ground.",
      "Drive through your heels to lift your hips toward the ceiling.",
      "Lower back down with control and repeat."
    ],
    tips: [
      "Keep your chin tucked and core engaged.",
      "Squeeze your glutes at the top of the movement.",
      "Do not arch your lower back."
    ],
    variations: ["Bodyweight Hip Thrust", "Single-Leg Hip Thrust"]
  },
  {
    id: "i41",
    name: "Barbell Good Morning",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A hip hinge exercise that targets the posterior chain while maintaining a neutral spine.",
    instructions: [
      "Stand with feet hip-width apart, barbell on upper back.",
      "Hinge at the hips while keeping back flat and knees slightly bent.",
      "Lower until you feel a stretch in your hamstrings.",
      "Return to standing by driving hips forward."
    ],
    tips: [
      "Keep your chest up throughout the movement.",
      "Do not round your back.",
      "Move slowly and with control."
    ],
    variations: ["Romanian Deadlift", "Single-Leg Good Morning"]
  },
  {
    id: "i42",
    name: "Barbell Shrug",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Upper Back",
    description: "An exercise that targets the trapezius muscles by lifting the shoulders toward the ears.",
    instructions: [
      "Stand with feet hip-width apart, barbell in front of thighs.",
      "Lift shoulders straight up toward ears.",
      "Hold briefly at the top.",
      "Lower back down with control."
    ],
    tips: [
      "Keep your arms straight throughout.",
      "Do not roll shoulders forward or backward.",
      "Focus on lifting straight up."
    ],
    variations: ["Dumbbell Shrug", "Behind-the-Back Shrug"]
  },
  {
    id: "i43",
    name: "Barbell Reverse Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Arms, Forearms",
    description: "A biceps and forearm exercise performed with an underhand grip on the barbell.",
    instructions: [
      "Stand with feet hip-width apart, barbell in hands with underhand grip.",
      "Curl the barbell toward your shoulders.",
      "Lower back down with control.",
      "Repeat."
    ],
    tips: [
      "Keep your elbows close to your body.",
      "Do not swing the barbell.",
      "Focus on forearm engagement."
    ],
    variations: ["Dumbbell Reverse Curl", "EZ Bar Reverse Curl"]
  },
  {
    id: "i44",
    name: "Barbell Preacher Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Preacher Bench",
    targetMuscles: "Arms",
    description: "A biceps exercise performed on a preacher bench to isolate the biceps and prevent cheating.",
    instructions: [
      "Sit at preacher bench with arms extended and supported.",
      "Grip barbell with underhand grip.",
      "Curl the barbell toward your shoulders.",
      "Lower back down with control."
    ],
    tips: [
      "Keep your upper arms flat against the pad.",
      "Do not swing the weight.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Preacher Curl", "EZ Bar Preacher Curl"]
  },
  {
    id: "i45",
    name: "Barbell Close-Grip Bench Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Bench",
    targetMuscles: "Arms, Chest, Shoulders",
    description: "A bench press variation with hands closer together to emphasize triceps engagement.",
    instructions: [
      "Lie on bench with hands closer than shoulder-width on barbell.",
      "Lower barbell to mid-chest.",
      "Press back up to starting position.",
      "Repeat."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not flare elbows out.",
      "Maintain control throughout movement."
    ],
    variations: ["Dumbbell Close-Grip Press", "Floor Press"]
  },
  {
    id: "i46",
    name: "Barbell Incline Bench Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Incline Bench",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A bench press variation performed on an incline to target upper chest and shoulders.",
    instructions: [
      "Lie on incline bench with feet flat on floor.",
      "Grip barbell slightly wider than shoulder-width.",
      "Lower barbell to upper chest.",
      "Press back up to starting position."
    ],
    tips: [
      "Keep core engaged and back flat.",
      "Do not bounce the bar off chest.",
      "Control the weight throughout."
    ],
    variations: ["Dumbbell Incline Press", "Incline Push-up"]
  },
  {
    id: "i47",
    name: "Barbell Decline Bench Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Decline Bench",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A bench press variation performed on a decline to target lower chest.",
    instructions: [
      "Lie on decline bench with feet secured.",
      "Grip barbell slightly wider than shoulder-width.",
      "Lower barbell to lower chest.",
      "Press back up to starting position."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Do not bounce the bar off chest.",
      "Control the weight throughout."
    ],
    variations: ["Dumbbell Decline Press", "Decline Push-up"]
  },
  {
    id: "i48",
    name: "Barbell Pullover",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Bench",
    targetMuscles: "Back, Chest, Shoulders",
    description: "An exercise that targets the lats and chest by moving a barbell from overhead to chest level.",
    instructions: [
      "Lie on bench with head supported.",
      "Hold barbell with straight arms above chest.",
      "Lower barbell behind head while keeping arms straight.",
      "Return to starting position."
    ],
    tips: [
      "Keep arms straight throughout.",
      "Focus on lat engagement.",
      "Move slowly and with control."
    ],
    variations: ["Dumbbell Pullover", "Cable Pullover"]
  },
  {
    id: "i49",
    name: "Barbell Split Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A single-leg exercise performed with a barbell on the back to increase resistance.",
    instructions: [
      "Stand in split stance with barbell on upper back.",
      "Lower back knee toward ground.",
      "Push through front heel to return to start.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep chest up and core engaged.",
      "Do not let front knee go past toes.",
      "Maintain balance throughout."
    ],
    variations: ["Dumbbell Split Squat", "Walking Lunge"]
  },
  {
    id: "i50",
    name: "Barbell Step-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Box/Step",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A step-up exercise performed with a barbell on the back for increased resistance.",
    instructions: [
      "Stand facing box with barbell on upper back.",
      "Step up with one foot onto box.",
      "Drive through heel to stand fully on box.",
      "Step down and repeat, alternating sides."
    ],
    tips: [
      "Keep chest up and core engaged.",
      "Do not push off trailing leg.",
      "Use appropriate box height."
    ],
    variations: ["Dumbbell Step-up", "Lateral Step-up"]
  },
  {
    id: "i51",
    name: "Barbell Calf Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell, Step/Platform",
    targetMuscles: "Legs - Calves",
    description: "A calf exercise performed with a barbell on the back while standing on a raised surface.",
    instructions: [
      "Stand on step with balls of feet, barbell on upper back.",
      "Lower heels below step level.",
      "Raise up onto toes.",
      "Lower back down with control."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Move through full range of motion.",
      "Control the movement."
    ],
    variations: ["Dumbbell Calf Raise", "Single-Leg Calf Raise"]
  },
  {
    id: "i52",
    name: "Barbell Front Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder exercise that targets the anterior deltoids by lifting a barbell in front of the body.",
    instructions: [
      "Stand with feet hip-width apart, barbell in front of thighs.",
      "Lift barbell forward and up to shoulder height.",
      "Lower back down with control.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Do not swing the weight.",
      "Control the movement."
    ],
    variations: ["Dumbbell Front Raise", "Plate Front Raise"]
  },
  {
    id: "i53",
    name: "Barbell Lateral Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder exercise that targets the lateral deltoids by lifting a barbell to the sides.",
    instructions: [
      "Stand with feet hip-width apart, barbell in front of thighs.",
      "Lift barbell out to sides to shoulder height.",
      "Lower back down with control.",
      "Repeat."
    ],
    tips: [
      "Keep slight bend in elbows.",
      "Do not swing the weight.",
      "Control the movement."
    ],
    variations: ["Dumbbell Lateral Raise", "Cable Lateral Raise"]
  },
  {
    id: "i54",
    name: "Barbell Reverse Fly",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Barbell",
    targetMuscles: "Back, Shoulders",
    description: "An exercise that targets the rear deltoids and upper back by moving a barbell in a reverse fly motion.",
    instructions: [
      "Stand with feet hip-width apart, barbell in front of thighs.",
      "Hinge forward at hips with flat back.",
      "Lift barbell out to sides.",
      "Lower back down with control."
    ],
    tips: [
      "Keep back flat throughout.",
      "Squeeze shoulder blades together.",
      "Control the movement."
    ],
    variations: ["Dumbbell Reverse Fly", "Cable Reverse Fly"]
  },
  {
    id: "i55",
    name: "Cable Chest Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press exercise performed using a cable machine for constant tension throughout the movement.",
    instructions: [
      "Stand facing away from cable machine, handles at chest height.",
      "Step forward into split stance.",
      "Press handles forward until arms are extended.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Maintain slight forward lean.",
      "Control the weight throughout movement."
    ],
    variations: ["Single-Arm Cable Press", "Cable Fly"]
  },
  {
    id: "i56",
    name: "Cable Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Back, Arms, Core",
    description: "A rowing exercise performed using a cable machine to target the back muscles.",
    instructions: [
      "Sit facing cable machine, feet against platform.",
      "Grip handles with straight arms.",
      "Pull handles toward lower chest.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep chest up and core engaged.",
      "Squeeze shoulder blades together.",
      "Do not round back."
    ],
    variations: ["Single-Arm Cable Row", "Wide-Grip Cable Row"]
  },
  {
    id: "i57",
    name: "Cable Lat Pulldown",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Back, Arms",
    description: "A pulldown exercise that targets the latissimus dorsi muscles using a cable machine.",
    instructions: [
      "Sit at lat pulldown machine, adjust pad height.",
      "Grip bar wider than shoulder-width.",
      "Pull bar down to upper chest.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep chest up throughout.",
      "Do not lean back excessively.",
      "Focus on lat engagement."
    ],
    variations: ["Close-Grip Lat Pulldown", "Single-Arm Lat Pulldown"]
  },
  {
    id: "i58",
    name: "Cable Triceps Pushdown",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Arms",
    description: "A triceps exercise performed using a cable machine with constant tension.",
    instructions: [
      "Stand facing cable machine, bar at upper chest height.",
      "Grip bar with hands close together.",
      "Push bar down until arms are extended.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not swing the weight.",
      "Focus on triceps contraction."
    ],
    variations: ["Rope Pushdown", "Single-Arm Pushdown"]
  },
  {
    id: "i59",
    name: "Cable Biceps Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Arms",
    description: "A biceps exercise performed using a cable machine for constant tension.",
    instructions: [
      "Stand facing cable machine, bar at lower position.",
      "Grip bar with underhand grip.",
      "Curl bar toward shoulders.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not swing the weight.",
      "Focus on biceps contraction."
    ],
    variations: ["Rope Hammer Curl", "Single-Arm Cable Curl"]
  },
  {
    id: "i60",
    name: "Cable Shoulder Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder press exercise performed using a cable machine for constant tension.",
    instructions: [
      "Stand facing away from cable machine, handles at shoulder height.",
      "Press handles overhead until arms are extended.",
      "Lower back to starting position.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Do not lock elbows at top.",
      "Control the weight throughout."
    ],
    variations: ["Single-Arm Shoulder Press", "Seated Cable Press"]
  },
  {
    id: "i61",
    name: "Cable Face Pull",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Back, Shoulders",
    description: "An exercise that targets the rear deltoids and upper back using a cable machine.",
    instructions: [
      "Stand facing cable machine, rope attachment at eye level.",
      "Grip rope with hands facing each other.",
      "Pull rope toward face, separating hands.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep chest up throughout.",
      "Focus on rear deltoid engagement.",
      "Squeeze shoulder blades together."
    ],
    variations: ["Single-Arm Face Pull", "High Face Pull"]
  },
  {
    id: "i62",
    name: "Cable Woodchop",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Core, Shoulders",
    description: "A rotational core exercise performed using a cable machine.",
    instructions: [
      "Stand sideways to cable machine, handle at high position.",
      "Grip handle with both hands.",
      "Pull handle down and across body.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Rotate from hips, not just arms.",
      "Control the movement."
    ],
    variations: ["Low to High Woodchop", "Single-Arm Woodchop"]
  },
  {
    id: "i63",
    name: "Cable Crunch",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Core",
    description: "A core exercise performed using a cable machine for added resistance.",
    instructions: [
      "Kneel facing cable machine, rope attachment above head.",
      "Grip rope behind head.",
      "Curl upper body toward floor.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep hips stationary.",
      "Focus on core contraction.",
      "Do not pull with arms."
    ],
    variations: ["Standing Cable Crunch", "Kneeling Cable Crunch"]
  },
  {
    id: "i64",
    name: "Cable Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A squat variation performed using a cable machine for added resistance.",
    instructions: [
      "Stand facing away from cable machine, bar at shoulder height.",
      "Place bar on upper back.",
      "Perform squat movement.",
      "Return to standing position."
    ],
    tips: [
      "Keep chest up and core engaged.",
      "Do not let knees collapse inward.",
      "Control the movement."
    ],
    variations: ["Cable Front Squat", "Cable Split Squat"]
  },
  {
    id: "i65",
    name: "Cable Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A deadlift variation performed using a cable machine for constant tension.",
    instructions: [
      "Stand facing cable machine, bar at lower position.",
      "Hinge at hips and bend knees to grip bar.",
      "Stand up by extending hips and knees.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep back flat throughout.",
      "Keep bar close to body.",
      "Control the movement."
    ],
    variations: ["Cable Romanian Deadlift", "Single-Leg Cable Deadlift"]
  },
  {
    id: "i66",
    name: "Cable Lunge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A lunge variation performed using a cable machine for added resistance.",
    instructions: [
      "Stand facing away from cable machine, handle at waist height.",
      "Step forward into lunge position.",
      "Lower back knee toward floor.",
      "Push through front heel to return to start."
    ],
    tips: [
      "Keep chest up and core engaged.",
      "Do not let front knee go past toes.",
      "Control the movement."
    ],
    variations: ["Cable Reverse Lunge", "Walking Cable Lunge"]
  },
  {
    id: "i67",
    name: "Cable Calf Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine, Step",
    targetMuscles: "Legs - Calves",
    description: "A calf exercise performed using a cable machine for added resistance.",
    instructions: [
      "Stand on step facing cable machine, handle at waist height.",
      "Place balls of feet on step.",
      "Raise heels as high as possible.",
      "Lower heels below step level with control."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Move through full range of motion.",
      "Control the movement."
    ],
    variations: ["Single-Leg Cable Calf Raise", "Seated Cable Calf Raise"]
  },
  {
    id: "i68",
    name: "Cable Pull-Through",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Hamstrings, Glutes",
    description: "A hip hinge exercise performed using a cable machine between the legs.",
    instructions: [
      "Stand facing away from cable machine, handle between legs.",
      "Hinge at hips and bend knees slightly.",
      "Drive hips forward to stand up.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep back flat throughout.",
      "Focus on hip drive.",
      "Control the movement."
    ],
    variations: ["Single-Leg Pull-Through", "Wide Stance Pull-Through"]
  },
  {
    id: "i69",
    name: "Cable Reverse Fly",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Cable Machine",
    targetMuscles: "Back, Shoulders",
    description: "A rear deltoid exercise performed using a cable machine for constant tension.",
    instructions: [
      "Stand facing cable machine, handles at chest height.",
      "Step forward into split stance.",
      "Pull handles out to sides.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep chest up throughout.",
      "Squeeze shoulder blades together.",
      "Control the movement."
    ],
    variations: ["Single-Arm Reverse Fly", "Seated Reverse Fly"]
  },
  {
    id: "i70",
    name: "Leg Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Leg Press Machine",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A compound leg exercise performed on a machine that targets the quadriceps, hamstrings, and glutes.",
    instructions: [
      "Sit in leg press machine, feet shoulder-width on platform.",
      "Release safety handles and lower platform toward chest.",
      "Press platform back up until legs are extended.",
      "Repeat with control."
    ],
    tips: [
      "Keep back flat against pad.",
      "Do not lock knees at top.",
      "Keep feet flat on platform."
    ],
    variations: ["Single-Leg Press", "Narrow Stance Leg Press"]
  },
  {
    id: "i71",
    name: "Hack Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Hack Squat Machine",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A squat variation performed on a machine that emphasizes quadriceps development.",
    instructions: [
      "Position shoulders under pads, feet shoulder-width.",
      "Release safety handles.",
      "Lower until thighs are parallel to platform.",
      "Press back up to starting position."
    ],
    tips: [
      "Keep back flat against pad.",
      "Do not let knees collapse inward.",
      "Control the movement."
    ],
    variations: ["Narrow Stance Hack Squat", "Wide Stance Hack Squat"]
  },
  {
    id: "i72",
    name: "Seated Leg Curl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Leg Curl Machine",
    targetMuscles: "Hamstrings",
    description: "An isolation exercise performed on a machine to target the hamstrings.",
    instructions: [
      "Sit in leg curl machine, adjust pad height.",
      "Place legs under pad, knees aligned with machine axis.",
      "Curl legs toward glutes.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep hips stationary.",
      "Focus on hamstring contraction.",
      "Control the movement."
    ],
    variations: ["Lying Leg Curl", "Standing Leg Curl"]
  },
  {
    id: "i73",
    name: "Leg Extension",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Leg Extension Machine",
    targetMuscles: "Legs - Thighs",
    description: "An isolation exercise performed on a machine to target the quadriceps.",
    instructions: [
      "Sit in leg extension machine, adjust pad height.",
      "Place legs under pad, knees aligned with machine axis.",
      "Extend legs until straight.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep back against pad.",
      "Focus on quadriceps contraction.",
      "Control the movement."
    ],
    variations: ["Single-Leg Extension", "Seated Leg Extension"]
  },
  {
    id: "i74",
    name: "Seated Calf Raise",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Calf Raise Machine",
    targetMuscles: "Legs - Calves",
    description: "An isolation exercise performed on a machine to target the calf muscles.",
    instructions: [
      "Sit in calf raise machine, adjust pad height.",
      "Place balls of feet on platform.",
      "Raise heels as high as possible.",
      "Lower heels below platform level with control."
    ],
    tips: [
      "Keep knees stationary.",
      "Move through full range of motion.",
      "Control the movement."
    ],
    variations: ["Standing Calf Raise", "Single-Leg Calf Raise"]
  },
  {
    id: "i75",
    name: "Chest Press Machine",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Chest Press Machine",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press exercise performed on a machine for controlled movement and stability.",
    instructions: [
      "Sit in machine, adjust seat height.",
      "Grip handles at chest level.",
      "Press handles forward until arms are extended.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep back against pad.",
      "Do not lock elbows at top.",
      "Control the movement."
    ],
    variations: ["Single-Arm Chest Press", "Incline Chest Press"]
  },
  {
    id: "i76",
    name: "Seated Row Machine",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Row Machine",
    targetMuscles: "Back, Arms",
    description: "A rowing exercise performed on a machine to target the back muscles.",
    instructions: [
      "Sit in row machine, adjust seat height.",
      "Grip handles with straight arms.",
      "Pull handles toward lower chest.",
      "Return to starting position with control."
    ],
    tips: [
      "Keep chest up throughout.",
      "Squeeze shoulder blades together.",
      "Control the movement."
    ],
    variations: ["Wide-Grip Row", "Close-Grip Row"]
  },
  {
    id: "i77",
    name: "Shoulder Press Machine",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Shoulder Press Machine",
    targetMuscles: "Shoulders, Arms",
    description: "A shoulder press exercise performed on a machine for controlled movement.",
    instructions: [
      "Sit in machine, adjust seat height.",
      "Grip handles at shoulder level.",
      "Press handles overhead until arms are extended.",
      "Lower back to starting position."
    ],
    tips: [
      "Keep back against pad.",
      "Do not lock elbows at top.",
      "Control the movement."
    ],
    variations: ["Single-Arm Shoulder Press", "Seated Shoulder Press"]
  },
  {
    id: "i78",
    name: "Assisted Pull-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Assisted Pull-up Machine",
    targetMuscles: "Back, Arms",
    description: "A pull-up variation performed with assistance to build strength for unassisted pull-ups.",
    instructions: [
      "Set desired assistance weight.",
      "Kneel on platform, grip handles overhead.",
      "Pull body up until chin is over bar.",
      "Lower back down with control."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Focus on back engagement.",
      "Control the movement."
    ],
    variations: ["Wide-Grip Assisted Pull-up", "Close-Grip Assisted Pull-up"]
  },
  {
    id: "i79",
    name: "Assisted Dip",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Assisted Dip Machine",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A dip variation performed with assistance to build strength for unassisted dips.",
    instructions: [
      "Set desired assistance weight.",
      "Place knees on platform, grip bars.",
      "Lower body until elbows are at 90 degrees.",
      "Press back up to starting position."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Do not swing body.",
      "Control the movement."
    ],
    variations: ["Wide-Grip Assisted Dip", "Close-Grip Assisted Dip"]
  },
  {
    id: "i80",
    name: "Decline Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bench, Bodyweight",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A push-up variation performed with feet elevated to increase difficulty.",
    instructions: [
      "Place feet on elevated surface, hands on ground.",
      "Lower chest toward ground.",
      "Press back up to starting position.",
      "Repeat."
    ],
    tips: [
      "Keep body straight throughout.",
      "Do not sag at hips.",
      "Control the movement."
    ],
    variations: ["Wide-Grip Decline Push-up", "Close-Grip Decline Push-up"]
  },
  {
    id: "i81",
    name: "Diamond Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bodyweight",
    targetMuscles: "Arms, Chest",
    description: "A push-up variation with hands close together to emphasize triceps engagement.",
    instructions: [
      "Place hands close together, forming diamond shape with thumbs and index fingers.",
      "Lower chest toward hands.",
      "Press back up to starting position.",
      "Repeat."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not sag at hips.",
      "Control the movement."
    ],
    variations: ["Wide Diamond Push-up", "Elevated Diamond Push-up"]
  },
  {
    id: "i82",
    name: "Pike Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bodyweight",
    targetMuscles: "Shoulders, Arms",
    description: "A push-up variation performed in a pike position to target shoulders.",
    instructions: [
      "Start in downward dog position.",
      "Lower head toward ground between hands.",
      "Press back up to starting position.",
      "Repeat."
    ],
    tips: [
      "Keep hips high throughout.",
      "Focus on shoulder engagement.",
      "Control the movement."
    ],
    variations: ["Elevated Pike Push-up", "Handstand Push-up Progression"]
  },
  {
    id: "i83",
    name: "Archer Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bodyweight",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A push-up variation that emphasizes one arm at a time for increased difficulty.",
    instructions: [
      "Start in push-up position, extend one arm to side.",
      "Lower body toward bent arm side.",
      "Press back up to starting position.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Do not rotate hips.",
      "Control the movement."
    ],
    variations: ["Wide Archer Push-up", "Elevated Archer Push-up"]
  },
  {
    id: "i84",
    name: "Inchworm Walkout",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Bodyweight",
    targetMuscles: "Core, Shoulders, Hamstrings",
    description: "A dynamic exercise that combines forward fold, plank, and push-up movements.",
    instructions: [
      "Start standing, fold forward to touch ground.",
      "Walk hands out to plank position.",
      "Perform push-up if desired.",
      "Walk hands back to feet and stand up."
    ],
    tips: [
      "Keep legs straight during walkout.",
      "Maintain plank position.",
      "Control the movement."
    ],
    variations: ["Push-up Inchworm", "Spider-Man Inchworm"]
  },
  {
    id: "i85",
    name: "Kettlebell Swing",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Hamstrings, Glutes, Core",
    description: "A dynamic hip hinge exercise that builds power and endurance using a kettlebell.",
    instructions: [
      "Stand with feet shoulder-width, kettlebell between feet.",
      "Hinge at hips, grab kettlebell with both hands.",
      "Drive hips forward to swing kettlebell to chest height.",
      "Let kettlebell swing back between legs and repeat."
    ],
    tips: [
      "Keep back flat throughout.",
      "Use hip drive, not arms.",
      "Keep core engaged."
    ],
    variations: ["Single-Arm Swing", "Russian Swing"]
  },
  {
    id: "i86",
    name: "Kettlebell Goblet Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat variation holding a kettlebell at chest level for added resistance and core engagement.",
    instructions: [
      "Hold kettlebell by handles at chest level.",
      "Squat down, keeping chest up.",
      "Drive through heels to stand up.",
      "Repeat."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not let knees collapse inward.",
      "Keep core engaged."
    ],
    variations: ["Sumo Goblet Squat", "Pulse Goblet Squat"]
  },
  {
    id: "i87",
    name: "Kettlebell Turkish Get-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Core, Full Body",
    description: "A complex movement that builds strength and stability throughout the body.",
    instructions: [
      "Lie on back, hold kettlebell in one hand.",
      "Roll to side, press kettlebell up.",
      "Bridge up, sweep leg back.",
      "Stand up, reverse movement to return."
    ],
    tips: [
      "Keep eyes on kettlebell.",
      "Move slowly and controlled.",
      "Maintain shoulder stability."
    ],
    variations: ["Half Get-up", "Bottoms-up Get-up"]
  },
  {
    id: "i88",
    name: "Kettlebell Clean",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A dynamic movement that builds power and coordination.",
    instructions: [
      "Stand with feet shoulder-width, kettlebell between feet.",
      "Hinge at hips, grab kettlebell.",
      "Drive hips forward, pull kettlebell up.",
      "Flip kettlebell to rack position."
    ],
    tips: [
      "Keep kettlebell close to body.",
      "Use hip drive, not just arms.",
      "Control the movement."
    ],
    variations: ["Single-Arm Clean", "Double Clean"]
  },
  {
    id: "i89",
    name: "Kettlebell Snatch",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A powerful movement that combines clean and press in one fluid motion.",
    instructions: [
      "Start with kettlebell between feet.",
      "Hinge at hips, grab kettlebell.",
      "Drive hips forward, pull kettlebell overhead.",
      "Lock out arm at top."
    ],
    tips: [
      "Keep core engaged throughout.",
      "Use hip drive for power.",
      "Control the movement."
    ],
    variations: ["Single-Arm Snatch", "Double Snatch"]
  },
  {
    id: "i90",
    name: "Kettlebell Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A shoulder press variation using a kettlebell for increased stability challenge.",
    instructions: [
      "Hold kettlebell in rack position.",
      "Press kettlebell overhead.",
      "Lower back to rack position.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged.",
      "Do not lean back.",
      "Control the movement."
    ],
    variations: ["Single-Arm Press", "Bottoms-up Press"]
  },
  {
    id: "i91",
    name: "Kettlebell Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Back, Arms, Core",
    description: "A rowing exercise performed with a kettlebell for increased range of motion.",
    instructions: [
      "Place one hand and knee on bench.",
      "Hold kettlebell in other hand.",
      "Row kettlebell to hip.",
      "Lower with control."
    ],
    tips: [
      "Keep back flat.",
      "Squeeze shoulder blade.",
      "Control the movement."
    ],
    variations: ["Renegade Row", "Double Kettlebell Row"]
  },
  {
    id: "i92",
    name: "Kettlebell Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A deadlift variation using a kettlebell for added resistance.",
    instructions: [
      "Stand with feet hip-width, kettlebell between feet.",
      "Hinge at hips, grab kettlebell.",
      "Stand up by driving hips forward.",
      "Lower back down with control."
    ],
    tips: [
      "Keep back flat throughout.",
      "Keep kettlebell close to body.",
      "Control the movement."
    ],
    variations: ["Single-Leg Deadlift", "Sumo Deadlift"]
  },
  {
    id: "i93",
    name: "Kettlebell Lunge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A lunge variation performed while holding a kettlebell for added resistance.",
    instructions: [
      "Hold kettlebell in rack position.",
      "Step forward into lunge.",
      "Lower back knee toward ground.",
      "Push through front heel to return."
    ],
    tips: [
      "Keep chest up.",
      "Do not let front knee go past toes.",
      "Control the movement."
    ],
    variations: ["Walking Lunge", "Reverse Lunge"]
  },
  {
    id: "i94",
    name: "Kettlebell Windmill",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Core, Hamstrings",
    description: "A complex movement that builds shoulder stability and core strength.",
    instructions: [
      "Hold kettlebell overhead in one hand.",
      "Hinge at hips, rotate torso.",
      "Reach opposite hand toward ground.",
      "Return to starting position."
    ],
    tips: [
      "Keep eyes on kettlebell.",
      "Maintain shoulder stability.",
      "Control the movement."
    ],
    variations: ["Half Windmill", "Bottoms-up Windmill"]
  },
  {
    id: "i95",
    name: "Kettlebell Figure 8",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Core, Shoulders, Arms",
    description: "A dynamic movement that builds coordination and core strength.",
    instructions: [
      "Stand with feet wide, hold kettlebell in one hand.",
      "Pass kettlebell between legs to other hand.",
      "Swing kettlebell around leg to front.",
      "Repeat in figure 8 pattern."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain good posture.",
      "Control the movement."
    ],
    variations: ["Single-Leg Figure 8", "Double Figure 8"]
  },
  {
    id: "i96",
    name: "Kettlebell Halo",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Core",
    description: "A movement that builds shoulder mobility and core stability.",
    instructions: [
      "Hold kettlebell by handles at chest level.",
      "Circle kettlebell around head.",
      "Keep core engaged throughout.",
      "Reverse direction."
    ],
    tips: [
      "Keep elbows close to body.",
      "Maintain good posture.",
      "Control the movement."
    ],
    variations: ["Bottoms-up Halo", "Single-Arm Halo"]
  },
  {
    id: "i97",
    name: "Kettlebell Thruster",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Shoulders, Arms",
    description: "A compound movement combining squat and press.",
    instructions: [
      "Hold kettlebell in rack position.",
      "Perform squat.",
      "Drive up and press kettlebell overhead.",
      "Lower back to rack position."
    ],
    tips: [
      "Keep core engaged.",
      "Use leg drive for press.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Thruster", "Bottoms-up Thruster"]
  },
  {
    id: "i98",
    name: "Kettlebell Front Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat variation holding a kettlebell in front rack position.",
    instructions: [
      "Hold kettlebell in rack position.",
      "Perform squat, keeping chest up.",
      "Drive through heels to stand.",
      "Repeat."
    ],
    tips: [
      "Keep elbows high.",
      "Do not let knees collapse inward.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Front Squat", "Bottoms-up Front Squat"]
  },
  {
    id: "i99",
    name: "Kettlebell Overhead Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A squat variation with kettlebell held overhead for increased stability challenge.",
    instructions: [
      "Hold kettlebell overhead.",
      "Perform squat while maintaining overhead position.",
      "Drive through heels to stand.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain shoulder stability.",
      "Control the movement."
    ],
    variations: ["Single-Arm Overhead Squat", "Bottoms-up Overhead Squat"]
  },
  {
    id: "i100",
    name: "Resistance Band Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Resistance Band",
    targetMuscles: "Legs - Thighs, Glutes",
    description: "A squat variation performed with a resistance band for added tension and glute activation.",
    instructions: [
      "Place band around thighs, just above knees.",
      "Stand with feet shoulder-width apart.",
      "Perform squat while maintaining band tension.",
      "Return to standing position."
    ],
    tips: [
      "Keep knees aligned with toes.",
      "Maintain band tension throughout.",
      "Keep core engaged."
    ],
    variations: ["Band Squat with Overhead Press", "Band Squat with Side Step"]
  },
  {
    id: "i101",
    name: "Resistance Band Deadlift",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Resistance Band",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A deadlift variation using a resistance band for constant tension.",
    instructions: [
      "Stand on band, hold handles at sides.",
      "Hinge at hips, keeping back flat.",
      "Stand up by driving hips forward.",
      "Return to starting position."
    ],
    tips: [
      "Keep band close to body.",
      "Maintain back position.",
      "Control the movement."
    ],
    variations: ["Single-Leg Band Deadlift", "Sumo Band Deadlift"]
  },
  {
    id: "i102",
    name: "Resistance Band Row",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Resistance Band",
    targetMuscles: "Back, Arms",
    description: "A rowing exercise performed with a resistance band for constant tension.",
    instructions: [
      "Anchor band at chest height.",
      "Step back to create tension.",
      "Pull handles toward chest.",
      "Return to starting position."
    ],
    tips: [
      "Keep chest up.",
      "Squeeze shoulder blades.",
      "Control the movement."
    ],
    variations: ["Single-Arm Band Row", "Wide-Grip Band Row"]
  },
  {
    id: "i103",
    name: "Resistance Band Chest Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Resistance Band",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press exercise performed with a resistance band.",
    instructions: [
      "Anchor band behind back at shoulder height.",
      "Hold handles at chest level.",
      "Press forward until arms are extended.",
      "Return to starting position."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain good posture.",
      "Control the movement."
    ],
    variations: ["Single-Arm Band Press", "Band Push-up"]
  },
  {
    id: "i104",
    name: "Medicine Ball Slam",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Shoulders, Arms",
    description: "A dynamic exercise that builds power and core strength.",
    instructions: [
      "Stand with feet shoulder-width, hold ball overhead.",
      "Slam ball to ground with force.",
      "Catch ball on bounce.",
      "Repeat."
    ],
    tips: [
      "Use full body movement.",
      "Keep core engaged.",
      "Control the catch."
    ],
    variations: ["Side Slam", "Rotational Slam"]
  },
  {
    id: "i105",
    name: "Medicine Ball Chest Pass",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball, Wall",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A dynamic chest press variation using a medicine ball.",
    instructions: [
      "Stand facing wall, hold ball at chest.",
      "Step forward and throw ball to wall.",
      "Catch ball on return.",
      "Repeat."
    ],
    tips: [
      "Use leg drive for power.",
      "Keep core engaged.",
      "Control the catch."
    ],
    variations: ["Overhead Pass", "Rotational Pass"]
  },
  {
    id: "i106",
    name: "Medicine Ball Russian Twist",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Obliques",
    description: "A core exercise that targets the obliques using a medicine ball.",
    instructions: [
      "Sit on ground, lean back slightly.",
      "Hold ball at chest, feet off ground.",
      "Rotate torso side to side.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain balance.",
      "Control the movement."
    ],
    variations: ["Weighted Russian Twist", "Legs Extended Twist"]
  },
  {
    id: "i107",
    name: "Medicine Ball Squat to Press",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Legs - Thighs, Shoulders, Arms",
    description: "A compound movement combining squat and overhead press.",
    instructions: [
      "Hold ball at chest level.",
      "Perform squat.",
      "Drive up and press ball overhead.",
      "Return to starting position."
    ],
    tips: [
      "Keep core engaged.",
      "Use leg drive for press.",
      "Control the movement."
    ],
    variations: ["Squat to Throw", "Jump Squat to Press"]
  },
  {
    id: "i108",
    name: "Medicine Ball Woodchop",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Shoulders",
    description: "A rotational core exercise using a medicine ball.",
    instructions: [
      "Stand with feet shoulder-width, hold ball overhead.",
      "Rotate and chop ball down to opposite knee.",
      "Return to starting position.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep core engaged.",
      "Rotate from hips.",
      "Control the movement."
    ],
    variations: ["Low to High Woodchop", "Kneeling Woodchop"]
  },
  {
    id: "i109",
    name: "Medicine Ball Lunge with Rotation",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Legs - Thighs, Core, Shoulders",
    description: "A lunge variation incorporating rotation with a medicine ball.",
    instructions: [
      "Hold ball at chest level.",
      "Step forward into lunge.",
      "Rotate torso toward front leg.",
      "Return to starting position."
    ],
    tips: [
      "Keep front knee aligned.",
      "Maintain balance.",
      "Control the movement."
    ],
    variations: ["Reverse Lunge with Rotation", "Walking Lunge with Rotation"]
  },
  {
    id: "i110",
    name: "Medicine Ball Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Chest, Shoulders, Arms, Core",
    description: "A push-up variation performed with hands on a medicine ball.",
    instructions: [
      "Place one hand on ball, one on ground.",
      "Perform push-up.",
      "Roll ball to other hand.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain plank position.",
      "Control the movement."
    ],
    variations: ["Two-Ball Push-up", "Ball to Ball Push-up"]
  },
  {
    id: "i111",
    name: "Medicine Ball V-Up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core",
    description: "An advanced core exercise using a medicine ball for added resistance.",
    instructions: [
      "Lie on back, hold ball overhead.",
      "Lift legs and upper body simultaneously.",
      "Pass ball from hands to feet.",
      "Lower back down with control."
    ],
    tips: [
      "Keep legs straight.",
      "Control the movement.",
      "Maintain core engagement."
    ],
    variations: ["Weighted V-Up", "Alternating V-Up"]
  },
  {
    id: "i112",
    name: "Medicine Ball Burpee",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Full Body",
    description: "A dynamic full-body exercise incorporating a medicine ball.",
    instructions: [
      "Hold ball at chest level.",
      "Perform burpee movement.",
      "Press ball overhead at jump.",
      "Repeat."
    ],
    tips: [
      "Keep core engaged.",
      "Control the movement.",
      "Land softly."
    ],
    variations: ["Burpee to Throw", "Burpee to Slam"]
  },
  {
    id: "i113",
    name: "Medicine Ball Mountain Climber",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Shoulders, Arms",
    description: "A dynamic core exercise performed with hands on a medicine ball.",
    instructions: [
      "Place hands on ball in plank position.",
      "Alternate bringing knees to chest.",
      "Keep core engaged throughout.",
      "Maintain pace."
    ],
    tips: [
      "Keep hips level.",
      "Maintain plank position.",
      "Control the movement."
    ],
    variations: ["Cross-Body Mountain Climber", "Mountain Climber to Push-up"]
  },
  {
    id: "i114",
    name: "Medicine Ball Plank to Push-up",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Shoulders, Arms",
    description: "A compound movement combining plank and push-up with a medicine ball.",
    instructions: [
      "Start in forearm plank with ball under one hand.",
      "Push up to full plank position.",
      "Return to forearm plank.",
      "Repeat and switch sides."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain straight body line.",
      "Control the movement."
    ],
    variations: ["Ball to Ball Plank Push-up", "Rolling Plank Push-up"]
  },
  {
    id: "i115",
    name: "Medicine Ball Side Plank",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Obliques",
    description: "A side plank variation performed with a medicine ball for added challenge.",
    instructions: [
      "Place ball under bottom hand in side plank.",
      "Hold top arm extended.",
      "Maintain position.",
      "Repeat on other side."
    ],
    tips: [
      "Keep body straight.",
      "Engage core and obliques.",
      "Control the movement."
    ],
    variations: ["Side Plank with Ball Pass", "Rolling Side Plank"]
  },
  {
    id: "i116",
    name: "Medicine Ball Bear Crawl",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Core, Shoulders, Arms",
    description: "A dynamic movement incorporating a medicine ball in a bear crawl pattern.",
    instructions: [
      "Start in bear position with ball under one hand.",
      "Crawl forward, moving ball between hands.",
      "Keep hips low and core engaged.",
      "Maintain pace."
    ],
    tips: [
      "Keep core engaged.",
      "Maintain good posture.",
      "Control the movement."
    ],
    variations: ["Bear Crawl to Push-up", "Lateral Bear Crawl"]
  },
  {
    id: "i117",
    name: "Medicine Ball Jump Squat",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A dynamic squat variation incorporating a medicine ball and jump.",
    instructions: [
      "Hold ball at chest level.",
      "Perform squat.",
      "Explosively jump upward.",
      "Land softly and repeat."
    ],
    tips: [
      "Land softly.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Jump Squat to Throw", "Rotational Jump Squat"]
  },
  {
    id: "i118",
    name: "Medicine Ball Overhead Walk",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Medicine Ball",
    targetMuscles: "Shoulders, Core, Arms",
    description: "A walking exercise performed while holding a medicine ball overhead.",
    instructions: [
      "Hold ball overhead with arms extended.",
      "Walk forward maintaining position.",
      "Keep core engaged throughout.",
      "Maintain pace."
    ],
    tips: [
      "Keep arms straight.",
      "Maintain good posture.",
      "Control the movement."
    ],
    variations: ["Overhead Lunge Walk", "Overhead Side Walk"]
  },
  {
    id: "a1",
    name: "Barbell Clean and Jerk",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Full Body",
    description: "A powerful Olympic lift that combines a clean and an overhead jerk, developing strength, power, and coordination.",
    instructions: [
      "Stand with feet hip-width apart, barbell over mid-foot.",
      "Grip barbell, hinge at hips, and set back flat.",
      "Explosively pull bar to shoulders (clean).",
      "Dip and drive bar overhead (jerk).",
      "Lower bar to shoulders, then to floor."
    ],
    tips: [
      "Keep bar close to body.",
      "Use legs and hips for power.",
      "Stabilize core during overhead phase."
    ],
    variations: ["Power Clean and Jerk", "Split Jerk"]
  },
  {
    id: "a2",
    name: "Barbell Snatch",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Full Body",
    description: "An explosive Olympic lift moving the barbell from ground to overhead in one motion.",
    instructions: [
      "Stand with wide grip, barbell over mid-foot.",
      "Set back flat, hinge at hips.",
      "Explosively pull bar overhead in one motion.",
      "Catch bar overhead with arms locked out.",
      "Stand up fully."
    ],
    tips: [
      "Keep bar close to body.",
      "Use hips for power.",
      "Stabilize overhead position."
    ],
    variations: ["Power Snatch", "Hang Snatch"]
  },
  {
    id: "a3",
    name: "Barbell Overhead Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A squat performed with a barbell held overhead, challenging stability and mobility.",
    instructions: [
      "Hold barbell overhead with wide grip.",
      "Set feet shoulder-width apart.",
      "Squat down, keeping bar overhead and torso upright.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Maintain bar over mid-foot.",
      "Control depth and movement."
    ],
    variations: ["Snatch-Grip Overhead Squat", "Pause Overhead Squat"]
  },
  {
    id: "a4",
    name: "Barbell Front Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Core",
    description: "A squat variation with the barbell racked on the front of the shoulders, emphasizing the quads and core.",
    instructions: [
      "Rack barbell on front of shoulders, elbows high.",
      "Set feet shoulder-width apart.",
      "Squat down, keeping chest up and elbows high.",
      "Drive up to standing."
    ],
    tips: [
      "Keep elbows high.",
      "Maintain upright torso.",
      "Control the descent."
    ],
    variations: ["Pause Front Squat", "Zombie Squat"]
  },
  {
    id: "a5",
    name: "Barbell Romanian Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Lower Back",
    description: "A deadlift variation focusing on the posterior chain with minimal knee bend.",
    instructions: [
      "Stand with barbell at thighs, feet hip-width apart.",
      "Hinge at hips, lower bar to mid-shin.",
      "Keep back flat and knees slightly bent.",
      "Return to standing by driving hips forward."
    ],
    tips: [
      "Keep bar close to legs.",
      "Do not round back.",
      "Control the movement."
    ],
    variations: ["Single-Leg Romanian Deadlift", "Deficit Romanian Deadlift"]
  },
  {
    id: "a6",
    name: "Barbell Bent-Over Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Back, Arms, Core",
    description: "A compound pulling exercise targeting the back and arms.",
    instructions: [
      "Stand with feet hip-width, barbell at shins.",
      "Hinge at hips, back flat, knees slightly bent.",
      "Pull barbell to lower ribs.",
      "Lower bar with control."
    ],
    tips: [
      "Keep elbows close to body.",
      "Do not round back.",
      "Squeeze shoulder blades."
    ],
    variations: ["Pendlay Row", "Underhand Bent-Over Row"]
  },
  {
    id: "a7",
    name: "Barbell Push Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A shoulder press variation using leg drive to press the barbell overhead.",
    instructions: [
      "Stand with barbell at shoulders, feet hip-width.",
      "Dip knees slightly, then drive up and press bar overhead.",
      "Lock out arms, then lower bar to shoulders."
    ],
    tips: [
      "Use legs for power.",
      "Keep core braced.",
      "Control the bar on descent."
    ],
    variations: ["Split Push Press", "Behind-the-Neck Push Press"]
  },
  {
    id: "a8",
    name: "Barbell Thruster",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A compound movement combining a front squat and overhead press.",
    instructions: [
      "Hold barbell at shoulders, feet shoulder-width.",
      "Perform front squat.",
      "Drive up and press bar overhead in one motion.",
      "Lower bar to shoulders and repeat."
    ],
    tips: [
      "Use leg drive for press.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Dumbbell Thruster", "Single-Arm Thruster"]
  },
  {
    id: "a9",
    name: "Barbell Split Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A single-leg squat variation with the barbell on the back, emphasizing unilateral strength.",
    instructions: [
      "Stand in split stance, barbell on back.",
      "Lower back knee toward floor.",
      "Drive up to standing, repeat on both sides."
    ],
    tips: [
      "Keep torso upright.",
      "Control the descent.",
      "Engage core for balance."
    ],
    variations: ["Bulgarian Split Squat", "Front Rack Split Squat"]
  },
  {
    id: "a10",
    name: "Barbell Hip Thrust",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Glutes, Hamstrings, Core",
    description: "A glute-focused hip extension exercise performed with the upper back on a bench.",
    instructions: [
      "Sit on floor, upper back on bench, barbell over hips.",
      "Drive hips up, squeezing glutes at top.",
      "Lower hips with control."
    ],
    tips: [
      "Keep chin tucked.",
      "Drive through heels.",
      "Pause at top for glute activation."
    ],
    variations: ["Single-Leg Hip Thrust", "Banded Hip Thrust"]
  },
  {
    id: "a11",
    name: "Barbell Power Clean",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Full Body",
    description: "An explosive lift moving the barbell from floor to shoulders in one motion.",
    instructions: [
      "Stand with feet hip-width, barbell over mid-foot.",
      "Grip bar, hinge at hips, set back flat.",
      "Explosively pull bar to shoulders.",
      "Catch bar in front rack position."
    ],
    tips: [
      "Keep bar close to body.",
      "Use hips for power.",
      "Stabilize catch position."
    ],
    variations: ["Hang Power Clean", "Block Power Clean"]
  },
  {
    id: "a12",
    name: "Barbell Hang Clean",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Full Body",
    description: "A clean variation starting from the hang position, emphasizing hip drive and speed.",
    instructions: [
      "Stand with barbell at thighs, feet hip-width.",
      "Hinge at hips, lower bar to knees.",
      "Explosively pull bar to shoulders.",
      "Catch bar in front rack position."
    ],
    tips: [
      "Keep bar close to body.",
      "Use hips for power.",
      "Stabilize catch position."
    ],
    variations: ["Hang Power Clean", "Hang Squat Clean"]
  },
  {
    id: "a13",
    name: "Barbell Push Jerk",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A jerk variation using a dip and drive to push the barbell overhead, catching it with a slight knee bend.",
    instructions: [
      "Stand with barbell at shoulders, feet hip-width.",
      "Dip knees, drive up and press bar overhead.",
      "Catch bar with slight knee bend, then stand up."
    ],
    tips: [
      "Use legs for power.",
      "Keep core braced.",
      "Stabilize overhead position."
    ],
    variations: ["Split Jerk", "Power Jerk"]
  },
  {
    id: "a14",
    name: "Barbell High Pull",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Back, Shoulders, Arms",
    description: "An explosive pulling exercise developing upper body power and coordination.",
    instructions: [
      "Stand with feet hip-width, barbell at shins.",
      "Explosively pull bar up to chest height, elbows high.",
      "Lower bar with control."
    ],
    tips: [
      "Keep bar close to body.",
      "Lead with elbows.",
      "Use hips for power."
    ],
    variations: ["Snatch-Grip High Pull", "Dumbbell High Pull"]
  },
  {
    id: "a15",
    name: "Barbell Cluster",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Full Body",
    description: "A combination of a clean, front squat, and thruster performed in sequence.",
    instructions: [
      "Clean barbell to shoulders.",
      "Perform front squat.",
      "Drive up and press bar overhead (thruster).",
      "Lower bar to floor and repeat."
    ],
    tips: [
      "Use hips and legs for power.",
      "Keep core engaged.",
      "Control each phase of the movement."
    ],
    variations: ["Dumbbell Cluster", "Kettlebell Cluster"]
  },
  {
    id: "a16",
    name: "Dumbbell Snatch",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Dumbbell",
    targetMuscles: "Full Body",
    description: "An explosive movement lifting a dumbbell from the floor to overhead in one motion.",
    instructions: [
      "Stand with feet hip-width, dumbbell between feet.",
      "Grip dumbbell, hinge at hips, set back flat.",
      "Explosively pull dumbbell overhead in one motion.",
      "Catch overhead with arm locked out, stand up fully."
    ],
    tips: [
      "Use hips for power.",
      "Keep dumbbell close to body.",
      "Stabilize overhead position."
    ],
    variations: ["Alternating Dumbbell Snatch", "Kettlebell Snatch"]
  },
  {
    id: "a17",
    name: "Dumbbell Clean and Press",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Full Body",
    description: "A compound movement combining a clean and overhead press with dumbbells.",
    instructions: [
      "Stand with feet hip-width, dumbbells at sides.",
      "Hinge at hips, lower dumbbells to floor.",
      "Explosively pull dumbbells to shoulders (clean).",
      "Press dumbbells overhead.",
      "Lower to shoulders, then to floor."
    ],
    tips: [
      "Use hips for power.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Single-Arm Clean and Press", "Kettlebell Clean and Press"]
  },
  {
    id: "a18",
    name: "Dumbbell Turkish Get-up",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbell",
    targetMuscles: "Full Body, Core",
    description: "A complex movement that develops strength, stability, and mobility by moving from lying to standing while holding a dumbbell overhead.",
    instructions: [
      "Lie on back, hold dumbbell overhead with one arm.",
      "Bend same-side knee, plant foot.",
      "Roll to elbow, then hand.",
      "Lift hips, sweep leg under, kneel, stand up.",
      "Reverse steps to return."
    ],
    tips: [
      "Move slowly and with control.",
      "Keep eyes on dumbbell.",
      "Engage core throughout."
    ],
    variations: ["Kettlebell Turkish Get-up", "Bodyweight Get-up"]
  },
  {
    id: "a19",
    name: "Dumbbell Renegade Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Back, Core, Arms",
    description: "A plank-based row that challenges core stability and upper body strength.",
    instructions: [
      "Start in plank with hands on dumbbells.",
      "Row one dumbbell to side while stabilizing core.",
      "Lower and repeat on other side."
    ],
    tips: [
      "Keep hips level.",
      "Engage core to prevent rotation.",
      "Control the row."
    ],
    variations: ["Renegade Row with Push-up", "Single-Arm Renegade Row"]
  },
  {
    id: "a20",
    name: "Dumbbell Overhead Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Glutes, Shoulders, Core",
    description: "A lunge performed while holding dumbbells overhead, increasing core and shoulder stability demands.",
    instructions: [
      "Hold dumbbells overhead, arms extended.",
      "Step forward into lunge, keeping arms overhead.",
      "Push back to standing, repeat on other side."
    ],
    tips: [
      "Keep core braced.",
      "Do not let arms drift forward.",
      "Control the descent."
    ],
    variations: ["Barbell Overhead Lunge", "Single-Arm Overhead Lunge"]
  },
  {
    id: "a21",
    name: "Dumbbell Pistol Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A single-leg squat performed with dumbbells for added resistance.",
    instructions: [
      "Stand on one leg, hold dumbbells at sides.",
      "Extend other leg forward.",
      "Squat down on standing leg, keeping chest up.",
      "Drive up to standing."
    ],
    tips: [
      "Keep knee aligned with toes.",
      "Control the descent.",
      "Engage core for balance."
    ],
    variations: ["Bodyweight Pistol Squat", "Assisted Pistol Squat"]
  },
  {
    id: "a22",
    name: "Dumbbell Bulgarian Split Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells, Bench",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A split squat variation with rear foot elevated and dumbbells for resistance.",
    instructions: [
      "Stand in split stance, rear foot on bench, dumbbells at sides.",
      "Lower back knee toward floor.",
      "Drive up to standing, repeat on both sides."
    ],
    tips: [
      "Keep torso upright.",
      "Control the descent.",
      "Engage core for balance."
    ],
    variations: ["Barbell Bulgarian Split Squat", "Goblet Bulgarian Split Squat"]
  },
  {
    id: "a23",
    name: "Dumbbell Single-Leg Romanian Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Hamstrings, Glutes, Core",
    description: "A single-leg deadlift variation with dumbbells, challenging balance and posterior chain strength.",
    instructions: [
      "Stand on one leg, dumbbells at sides.",
      "Hinge at hips, lower dumbbells toward floor.",
      "Return to standing, repeat on both sides."
    ],
    tips: [
      "Keep back flat.",
      "Engage core for balance.",
      "Control the movement."
    ],
    variations: ["Barbell Single-Leg Romanian Deadlift", "Bodyweight Single-Leg Deadlift"]
  },
  {
    id: "a24",
    name: "Dumbbell Arnold Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Arms, Core",
    description: "A shoulder press variation with rotation, targeting all heads of the deltoid.",
    instructions: [
      "Sit or stand, hold dumbbells at shoulders, palms facing body.",
      "Press dumbbells overhead while rotating palms forward.",
      "Lower to starting position with reverse rotation."
    ],
    tips: [
      "Keep core engaged.",
      "Control the rotation.",
      "Do not arch back."
    ],
    variations: ["Seated Arnold Press", "Single-Arm Arnold Press"]
  },
  {
    id: "a25",
    name: "Dumbbell Z-Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Core",
    description: "A strict overhead press performed seated on the floor, emphasizing core and shoulder strength.",
    instructions: [
      "Sit on floor with legs extended, dumbbells at shoulders.",
      "Press dumbbells overhead, keeping torso upright.",
      "Lower to shoulders and repeat."
    ],
    tips: [
      "Keep core braced.",
      "Do not lean back.",
      "Control the movement."
    ],
    variations: ["Barbell Z-Press", "Single-Arm Z-Press"]
  },
  {
    id: "a26",
    name: "Dumbbell Floor Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Chest, Shoulders, Arms",
    description: "A chest press variation performed lying on the floor, limiting range of motion and increasing triceps involvement.",
    instructions: [
      "Lie on back, knees bent, dumbbells at chest.",
      "Press dumbbells up until arms are extended.",
      "Lower to floor and repeat."
    ],
    tips: [
      "Keep elbows at 45 degrees.",
      "Control the descent.",
      "Engage core for stability."
    ],
    variations: ["Barbell Floor Press", "Single-Arm Floor Press"]
  },
  {
    id: "a27",
    name: "Dumbbell Sots Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Shoulders, Core, Legs - Thighs",
    description: "An overhead press performed from a deep squat position, challenging mobility and stability.",
    instructions: [
      "Hold dumbbells at shoulders, sit in deep squat.",
      "Press dumbbells overhead while maintaining squat.",
      "Lower to shoulders and repeat."
    ],
    tips: [
      "Keep chest up.",
      "Maintain squat depth.",
      "Control the press."
    ],
    variations: ["Barbell Sots Press", "Kettlebell Sots Press"]
  },
  {
    id: "a28",
    name: "Dumbbell Windmill",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbell",
    targetMuscles: "Core, Shoulders, Hips",
    description: "A rotational movement that improves core strength and shoulder stability.",
    instructions: [
      "Hold dumbbell overhead with one arm, feet wider than shoulder-width.",
      "Rotate torso and lower opposite hand toward foot.",
      "Return to standing, repeat on both sides."
    ],
    tips: [
      "Keep arm locked out.",
      "Move slowly and with control.",
      "Engage core throughout."
    ],
    variations: ["Kettlebell Windmill", "Bodyweight Windmill"]
  },
  {
    id: "a29",
    name: "Dumbbell Lateral Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A lunge variation stepping to the side, increasing hip and adductor involvement.",
    instructions: [
      "Stand with feet together, dumbbells at sides.",
      "Step out to side, bend knee, keep other leg straight.",
      "Push back to standing, repeat on both sides."
    ],
    tips: [
      "Keep chest up.",
      "Push hips back.",
      "Control the movement."
    ],
    variations: ["Bodyweight Lateral Lunge", "Barbell Lateral Lunge"]
  },
  {
    id: "a30",
    name: "Dumbbell Step-up to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells, Bench",
    targetMuscles: "Legs - Thighs, Glutes, Shoulders, Core",
    description: "A compound movement combining a step-up and overhead press.",
    instructions: [
      "Hold dumbbells at shoulders, stand in front of bench.",
      "Step up with one leg, press dumbbells overhead.",
      "Step down and repeat on other side."
    ],
    tips: [
      "Drive through heel.",
      "Keep core engaged.",
      "Control the press."
    ],
    variations: ["Barbell Step-up to Press", "Single-Arm Step-up to Press"]
  },
  {
    id: "a31",
    name: "Dumbbell Man Maker",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Full Body",
    description: "A complex movement combining a push-up, row, squat, and overhead press.",
    instructions: [
      "Start in plank with hands on dumbbells.",
      "Perform push-up, row each dumbbell.",
      "Jump feet forward, stand and press dumbbells overhead."
    ],
    tips: [
      "Keep core engaged.",
      "Control each phase.",
      "Use appropriate weight."
    ],
    variations: ["Man Maker with Burpee", "Single-Arm Man Maker"]
  },
  {
    id: "a32",
    name: "Dumbbell Dragon Flag",
    category: "Core Training",
    difficulty: "advanced",
    equipment: "Dumbbell (for anchor)",
    targetMuscles: "Core, Hip Flexors",
    description: "An advanced core exercise involving a controlled lowering and raising of the body while anchored.",
    instructions: [
      "Lie on bench, hold dumbbell behind head for anchor.",
      "Lift body up, keeping it straight.",
      "Lower body slowly, keeping core tight."
    ],
    tips: [
      "Move slowly and with control.",
      "Keep core braced.",
      "Do not let hips sag."
    ],
    variations: ["Bodyweight Dragon Flag", "Negative Dragon Flag"]
  },
  {
    id: "a33",
    name: "Dumbbell Overhead Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A squat performed with dumbbells held overhead, challenging stability and mobility.",
    instructions: [
      "Hold dumbbells overhead, arms extended.",
      "Set feet shoulder-width apart.",
      "Squat down, keeping dumbbells overhead and torso upright.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Maintain dumbbells over mid-foot.",
      "Control depth and movement."
    ],
    variations: ["Single-Arm Overhead Squat", "Kettlebell Overhead Squat"]
  },
  {
    id: "a34",
    name: "Dumbbell Push-up to Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Chest, Back, Arms, Core",
    description: "A push-up followed by a row, performed with hands on dumbbells.",
    instructions: [
      "Start in plank with hands on dumbbells.",
      "Perform push-up, then row one dumbbell.",
      "Repeat on other side."
    ],
    tips: [
      "Keep hips level.",
      "Engage core.",
      "Control the row."
    ],
    variations: ["Push-up to Row with Rotation", "Single-Arm Push-up to Row"]
  },
  {
    id: "a35",
    name: "Dumbbell Lunge to Curl to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Dumbbells",
    targetMuscles: "Legs - Thighs, Arms, Shoulders, Core",
    description: "A compound movement combining a lunge, biceps curl, and overhead press.",
    instructions: [
      "Hold dumbbells at sides, step forward into lunge.",
      "Curl dumbbells at bottom of lunge.",
      "Press dumbbells overhead as you stand up."
    ],
    tips: [
      "Keep core engaged.",
      "Control each phase.",
      "Use appropriate weight."
    ],
    variations: ["Reverse Lunge to Curl to Press", "Single-Arm Lunge to Curl to Press"]
  },
  {
    id: "a36",
    name: "Kettlebell Snatch",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "An explosive movement lifting a kettlebell from the floor to overhead in one motion.",
    instructions: [
      "Stand with feet hip-width, kettlebell between feet.",
      "Grip kettlebell, hinge at hips, set back flat.",
      "Explosively pull kettlebell overhead in one motion.",
      "Catch overhead with arm locked out, stand up fully."
    ],
    tips: [
      "Use hips for power.",
      "Keep kettlebell close to body.",
      "Stabilize overhead position."
    ],
    variations: ["Alternating Kettlebell Snatch", "Dumbbell Snatch"]
  },
  {
    id: "a37",
    name: "Kettlebell Clean and Jerk",
    category: "Olympic Lifting",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "A compound movement combining a clean and overhead jerk with a kettlebell.",
    instructions: [
      "Stand with feet hip-width, kettlebell between feet.",
      "Grip kettlebell, hinge at hips, set back flat.",
      "Explosively pull kettlebell to shoulder (clean).",
      "Dip and drive kettlebell overhead (jerk).",
      "Lower to shoulder, then to floor."
    ],
    tips: [
      "Use hips for power.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Clean and Jerk", "Dumbbell Clean and Jerk"]
  },
  {
    id: "a38",
    name: "Kettlebell Turkish Get-up",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body, Core",
    description: "A complex movement that develops strength, stability, and mobility by moving from lying to standing while holding a kettlebell overhead.",
    instructions: [
      "Lie on back, hold kettlebell overhead with one arm.",
      "Bend same-side knee, plant foot.",
      "Roll to elbow, then hand.",
      "Lift hips, sweep leg under, kneel, stand up.",
      "Reverse steps to return."
    ],
    tips: [
      "Move slowly and with control.",
      "Keep eyes on kettlebell.",
      "Engage core throughout."
    ],
    variations: ["Dumbbell Turkish Get-up", "Bodyweight Get-up"]
  },
  {
    id: "a39",
    name: "Kettlebell Pistol Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A single-leg squat performed with a kettlebell for added resistance.",
    instructions: [
      "Stand on one leg, hold kettlebell at chest (goblet position).",
      "Extend other leg forward.",
      "Squat down on standing leg, keeping chest up.",
      "Drive up to standing."
    ],
    tips: [
      "Keep knee aligned with toes.",
      "Control the descent.",
      "Engage core for balance."
    ],
    variations: ["Bodyweight Pistol Squat", "Dumbbell Pistol Squat"]
  },
  {
    id: "a40",
    name: "Kettlebell Windmill",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Core, Shoulders, Hips",
    description: "A rotational movement that improves core strength and shoulder stability.",
    instructions: [
      "Hold kettlebell overhead with one arm, feet wider than shoulder-width.",
      "Rotate torso and lower opposite hand toward foot.",
      "Return to standing, repeat on both sides."
    ],
    tips: [
      "Keep arm locked out.",
      "Move slowly and with control.",
      "Engage core throughout."
    ],
    variations: ["Dumbbell Windmill", "Bodyweight Windmill"]
  },
  {
    id: "a41",
    name: "Kettlebell Sots Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Shoulders, Core, Legs - Thighs",
    description: "An overhead press performed from a deep squat position, challenging mobility and stability.",
    instructions: [
      "Hold kettlebell at shoulder, sit in deep squat.",
      "Press kettlebell overhead while maintaining squat.",
      "Lower to shoulder and repeat."
    ],
    tips: [
      "Keep chest up.",
      "Maintain squat depth.",
      "Control the press."
    ],
    variations: ["Barbell Sots Press", "Dumbbell Sots Press"]
  },
  {
    id: "a42",
    name: "Kettlebell Overhead Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A squat performed with a kettlebell held overhead, challenging stability and mobility.",
    instructions: [
      "Hold kettlebell overhead, arm extended.",
      "Set feet shoulder-width apart.",
      "Squat down, keeping kettlebell overhead and torso upright.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Maintain kettlebell over mid-foot.",
      "Control depth and movement."
    ],
    variations: ["Single-Arm Overhead Squat", "Dumbbell Overhead Squat"]
  },
  {
    id: "a43",
    name: "Kettlebell Lateral Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A lunge variation stepping to the side, increasing hip and adductor involvement.",
    instructions: [
      "Stand with feet together, hold kettlebell at chest.",
      "Step out to side, bend knee, keep other leg straight.",
      "Push back to standing, repeat on both sides."
    ],
    tips: [
      "Keep chest up.",
      "Push hips back.",
      "Control the movement."
    ],
    variations: ["Bodyweight Lateral Lunge", "Dumbbell Lateral Lunge"]
  },
  {
    id: "a44",
    name: "Kettlebell Step-up to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell, Bench",
    targetMuscles: "Legs - Thighs, Glutes, Shoulders, Core",
    description: "A compound movement combining a step-up and overhead press.",
    instructions: [
      "Hold kettlebell at shoulder, stand in front of bench.",
      "Step up with one leg, press kettlebell overhead.",
      "Step down and repeat on other side."
    ],
    tips: [
      "Drive through heel.",
      "Keep core engaged.",
      "Control the press."
    ],
    variations: ["Dumbbell Step-up to Press", "Barbell Step-up to Press"]
  },
  {
    id: "a45",
    name: "Kettlebell Man Maker",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebells",
    targetMuscles: "Full Body",
    description: "A complex movement combining a push-up, row, squat, and overhead press with kettlebells.",
    instructions: [
      "Start in plank with hands on kettlebells.",
      "Perform push-up, row each kettlebell.",
      "Jump feet forward, stand and press kettlebells overhead."
    ],
    tips: [
      "Keep core engaged.",
      "Control each phase.",
      "Use appropriate weight."
    ],
    variations: ["Man Maker with Burpee", "Single-Arm Man Maker"]
  },
  {
    id: "a46",
    name: "Kettlebell Clean and Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "A compound movement combining a clean and overhead press with a kettlebell.",
    instructions: [
      "Stand with feet hip-width, kettlebell between feet.",
      "Grip kettlebell, hinge at hips, set back flat.",
      "Explosively pull kettlebell to shoulder (clean).",
      "Press kettlebell overhead.",
      "Lower to shoulder, then to floor."
    ],
    tips: [
      "Use hips for power.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Clean and Press", "Dumbbell Clean and Press"]
  },
  {
    id: "a47",
    name: "Kettlebell Single-Leg Romanian Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Hamstrings, Glutes, Core",
    description: "A single-leg deadlift variation with a kettlebell, challenging balance and posterior chain strength.",
    instructions: [
      "Stand on one leg, hold kettlebell at side.",
      "Hinge at hips, lower kettlebell toward floor.",
      "Return to standing, repeat on both sides."
    ],
    tips: [
      "Keep back flat.",
      "Engage core for balance.",
      "Control the movement."
    ],
    variations: ["Dumbbell Single-Leg Romanian Deadlift", "Bodyweight Single-Leg Deadlift"]
  },
  {
    id: "a48",
    name: "Kettlebell Goblet Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed holding a kettlebell at chest level, emphasizing core and lower body strength.",
    instructions: [
      "Hold kettlebell at chest (goblet position).",
      "Set feet shoulder-width apart.",
      "Squat down, keeping chest up and elbows inside knees.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Maintain upright torso.",
      "Control depth and movement."
    ],
    variations: ["Dumbbell Goblet Squat", "Barbell Front Squat"]
  },
  {
    id: "a49",
    name: "Kettlebell Swing to Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Core, Shoulders",
    description: "A dynamic movement combining a kettlebell swing and a squat for full-body conditioning.",
    instructions: [
      "Perform kettlebell swing.",
      "At top of swing, catch kettlebell at chest.",
      "Squat down, then return to swing."
    ],
    tips: [
      "Use hips for swing.",
      "Keep core engaged.",
      "Control the catch and squat."
    ],
    variations: ["Kettlebell Swing", "Kettlebell Goblet Squat"]
  },
  {
    id: "a50",
    name: "Kettlebell Clean to Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Glutes, Shoulders, Core",
    description: "A compound movement combining a clean and a lunge with a kettlebell.",
    instructions: [
      "Clean kettlebell to shoulder.",
      "Step forward into lunge, keeping kettlebell at shoulder.",
      "Push back to standing, repeat on both sides."
    ],
    tips: [
      "Keep core braced.",
      "Control the clean and lunge.",
      "Use appropriate weight."
    ],
    variations: ["Dumbbell Clean to Lunge", "Barbell Clean to Lunge"]
  },
  {
    id: "a51",
    name: "Kettlebell Figure 8 to Hold",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Core, Shoulders, Arms, Hips",
    description: "A dynamic movement passing the kettlebell in a figure 8 pattern between the legs, finishing with a hold.",
    instructions: [
      "Stand with feet wide, hold kettlebell in one hand.",
      "Pass kettlebell between legs in figure 8 pattern.",
      "Finish with a hold at chest or overhead."
    ],
    tips: [
      "Keep core engaged.",
      "Move smoothly and with control.",
      "Use hips for power."
    ],
    variations: ["Kettlebell Figure 8", "Kettlebell Hold"]
  },
  {
    id: "a52",
    name: "Kettlebell Dead Clean",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "A clean variation starting from the floor, emphasizing hip drive and power.",
    instructions: [
      "Stand with feet hip-width, kettlebell between feet.",
      "Grip kettlebell, hinge at hips, set back flat.",
      "Explosively pull kettlebell to shoulder (clean).",
      "Lower to floor and repeat."
    ],
    tips: [
      "Use hips for power.",
      "Keep kettlebell close to body.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Dead Clean", "Dumbbell Dead Clean"]
  },
  {
    id: "a53",
    name: "Kettlebell Clean to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "A compound movement combining a clean and overhead press with a kettlebell.",
    instructions: [
      "Clean kettlebell to shoulder.",
      "Press kettlebell overhead.",
      "Lower to shoulder and repeat."
    ],
    tips: [
      "Use hips for power.",
      "Keep core engaged.",
      "Control the movement."
    ],
    variations: ["Double Kettlebell Clean to Press", "Dumbbell Clean to Press"]
  },
  {
    id: "a54",
    name: "Kettlebell Swing to Squat to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body",
    description: "A dynamic movement combining a swing, squat, and overhead press with a kettlebell.",
    instructions: [
      "Perform kettlebell swing.",
      "At top of swing, catch kettlebell at chest.",
      "Squat down, then press kettlebell overhead.",
      "Return to swing."
    ],
    tips: [
      "Use hips for swing.",
      "Keep core engaged.",
      "Control the catch, squat, and press."
    ],
    variations: ["Kettlebell Swing to Squat", "Kettlebell Thruster"]
  },
  {
    id: "a55",
    name: "Kettlebell Lunge to Curl to Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Legs - Thighs, Arms, Shoulders, Core",
    description: "A compound movement combining a lunge, biceps curl, and overhead press with a kettlebell.",
    instructions: [
      "Hold kettlebell at side, step forward into lunge.",
      "Curl kettlebell at bottom of lunge.",
      "Press kettlebell overhead as you stand up."
    ],
    tips: [
      "Keep core engaged.",
      "Control each phase.",
      "Use appropriate weight."
    ],
    variations: ["Reverse Lunge to Curl to Press", "Single-Arm Lunge to Curl to Press"]
  },
  {
    id: "a56",
    name: "Barbell Snatch-Grip Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Back, Traps",
    description: "A deadlift variation with a wide (snatch) grip, increasing upper back and posterior chain activation.",
    instructions: [
      "Stand with feet hip-width, barbell over mid-foot, wide grip.",
      "Set back flat, hinge at hips, bend knees.",
      "Pull bar up, keeping it close to body.",
      "Lock out at top, then lower with control."
    ],
    tips: [
      "Keep chest up and back flat.",
      "Engage lats and traps.",
      "Control the descent."
    ],
    variations: ["Conventional Deadlift", "Deficit Snatch-Grip Deadlift"]
  },
  {
    id: "a57",
    name: "Barbell Deficit Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Platform",
    targetMuscles: "Hamstrings, Glutes, Back",
    description: "A deadlift performed while standing on a platform, increasing range of motion and posterior chain demand.",
    instructions: [
      "Stand on platform, barbell over mid-foot.",
      "Set back flat, hinge at hips, bend knees.",
      "Pull bar up, keeping it close to body.",
      "Lock out at top, then lower with control."
    ],
    tips: [
      "Keep chest up and back flat.",
      "Engage core throughout.",
      "Control the descent."
    ],
    variations: ["Conventional Deadlift", "Snatch-Grip Deficit Deadlift"]
  },
  {
    id: "a58",
    name: "Barbell Pause Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat variation with a pause at the bottom, increasing time under tension and control.",
    instructions: [
      "Set up for squat, barbell on back or front.",
      "Squat down, pause at bottom for 2-3 seconds.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Maintain upright torso.",
      "Control the pause and ascent."
    ],
    variations: ["Front Pause Squat", "Box Pause Squat"]
  },
  {
    id: "a59",
    name: "Barbell Box Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Box",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed to a box, emphasizing control and posterior chain activation.",
    instructions: [
      "Set up for squat, barbell on back, box behind you.",
      "Squat down until glutes touch box.",
      "Pause briefly, then drive up to standing."
    ],
    tips: [
      "Keep shins vertical.",
      "Sit back onto box, not down.",
      "Control the movement."
    ],
    variations: ["Front Box Squat", "Paused Box Squat"]
  },
  {
    id: "a60",
    name: "Barbell Pin Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Power Rack",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed with the barbell starting from pins in a power rack, emphasizing starting strength and control.",
    instructions: [
      "Set barbell on pins at desired squat depth.",
      "Get under bar, set up squat stance.",
      "Drive up to standing, lower back to pins."
    ],
    tips: [
      "Start with lighter weight.",
      "Maintain tightness throughout.",
      "Control the bar onto pins."
    ],
    variations: ["Front Pin Squat", "Paused Pin Squat"]
  },
  {
    id: "a61",
    name: "Barbell Anderson Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Power Rack",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat variation starting from the bottom position (on pins), developing explosive strength from a dead stop.",
    instructions: [
      "Set barbell on pins at bottom squat position.",
      "Get under bar, set up squat stance.",
      "Drive up to standing, lower back to pins."
    ],
    tips: [
      "Start with lighter weight.",
      "Explode up from pins.",
      "Maintain tightness throughout."
    ],
    variations: ["Front Anderson Squat", "Paused Anderson Squat"]
  },
  {
    id: "a62",
    name: "Barbell Spoto Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation where the bar is paused just above the chest, increasing time under tension and control.",
    instructions: [
      "Set up for bench press, barbell in hands.",
      "Lower bar to just above chest, pause for 1-2 seconds.",
      "Press bar back up."
    ],
    tips: [
      "Keep elbows at 45 degrees.",
      "Control the pause.",
      "Engage lats for stability."
    ],
    variations: ["Close-Grip Spoto Press", "Paused Spoto Press"]
  },
  {
    id: "a63",
    name: "Barbell Floor Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation performed lying on the floor, limiting range of motion and increasing triceps involvement.",
    instructions: [
      "Lie on floor, barbell in hands.",
      "Lower bar until elbows touch floor.",
      "Press bar back up."
    ],
    tips: [
      "Keep elbows at 45 degrees.",
      "Control the descent.",
      "Engage core for stability."
    ],
    variations: ["Close-Grip Floor Press", "Paused Floor Press"]
  },
  {
    id: "a64",
    name: "Barbell Larsen Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Chest, Shoulders, Triceps, Core",
    description: "A bench press variation performed with feet off the ground, increasing core activation and reducing leg drive.",
    instructions: [
      "Set up for bench press, feet off ground.",
      "Lower bar to chest, press back up."
    ],
    tips: [
      "Keep core braced.",
      "Control the descent.",
      "Engage lats for stability."
    ],
    variations: ["Close-Grip Larsen Press", "Paused Larsen Press"]
  },
  {
    id: "a65",
    name: "Barbell Pin Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Power Rack",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation starting from pins in a power rack, emphasizing starting strength and control.",
    instructions: [
      "Set barbell on pins at desired press height.",
      "Lie on bench, get under bar.",
      "Press bar up, lower back to pins."
    ],
    tips: [
      "Start with lighter weight.",
      "Maintain tightness throughout.",
      "Control the bar onto pins."
    ],
    variations: ["Close-Grip Pin Press", "Paused Pin Press"]
  },
  {
    id: "a66",
    name: "Barbell Board Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Boards, Spotter",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation performed with boards on the chest to limit range of motion and overload the lockout.",
    instructions: [
      "Set up for bench press, boards on chest.",
      "Lower bar to boards, press back up."
    ],
    tips: [
      "Use a spotter for safety.",
      "Control the descent.",
      "Engage triceps at lockout."
    ],
    variations: ["Close-Grip Board Press", "Paused Board Press"]
  },
  {
    id: "a67",
    name: "Barbell Slingshot Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Slingshot",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation using a slingshot device to assist the press and overload the top range of motion.",
    instructions: [
      "Set up for bench press, slingshot on arms.",
      "Lower bar to chest, press back up."
    ],
    tips: [
      "Use appropriate resistance.",
      "Control the descent.",
      "Engage triceps at lockout."
    ],
    variations: ["Close-Grip Slingshot Press", "Paused Slingshot Press"]
  },
  {
    id: "a68",
    name: "Barbell Close-Grip Bench Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Chest, Triceps, Shoulders",
    description: "A bench press variation with hands closer together, emphasizing triceps involvement.",
    instructions: [
      "Set up for bench press, hands shoulder-width apart.",
      "Lower bar to chest, press back up."
    ],
    tips: [
      "Keep elbows close to body.",
      "Control the descent.",
      "Engage triceps at lockout."
    ],
    variations: ["Paused Close-Grip Bench Press", "Board Close-Grip Bench Press"]
  },
  {
    id: "a69",
    name: "Barbell Spoto Pin Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Power Rack",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A hybrid bench press variation combining the Spoto press and pin press for increased control and starting strength.",
    instructions: [
      "Set up for bench press, barbell on pins above chest.",
      "Lower bar to just above chest, pause, press back up."
    ],
    tips: [
      "Control the pause and press.",
      "Engage lats for stability.",
      "Start with lighter weight."
    ],
    variations: ["Paused Spoto Pin Press", "Close-Grip Spoto Pin Press"]
  },
  {
    id: "a70",
    name: "Barbell Incline Bench Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Incline Bench",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation performed on an incline bench, emphasizing upper chest and shoulders.",
    instructions: [
      "Set up for incline bench press, barbell in hands.",
      "Lower bar to upper chest, press back up."
    ],
    tips: [
      "Keep elbows at 45 degrees.",
      "Control the descent.",
      "Engage upper chest at press."
    ],
    variations: ["Paused Incline Bench Press", "Close-Grip Incline Bench Press"]
  },
  {
    id: "a71",
    name: "Barbell Decline Bench Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Decline Bench",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation performed on a decline bench, emphasizing lower chest and triceps.",
    instructions: [
      "Set up for decline bench press, barbell in hands.",
      "Lower bar to lower chest, press back up."
    ],
    tips: [
      "Keep elbows at 45 degrees.",
      "Control the descent.",
      "Engage lower chest at press."
    ],
    variations: ["Paused Decline Bench Press", "Close-Grip Decline Bench Press"]
  },
  {
    id: "a72",
    name: "Barbell Reverse-Grip Bench Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Chest, Shoulders, Triceps",
    description: "A bench press variation with a reverse (supinated) grip, increasing upper chest and triceps activation.",
    instructions: [
      "Set up for bench press, use reverse grip.",
      "Lower bar to chest, press back up."
    ],
    tips: [
      "Use a spotter for safety.",
      "Control the descent.",
      "Engage upper chest at press."
    ],
    variations: ["Paused Reverse-Grip Bench Press", "Close-Grip Reverse-Grip Bench Press"]
  },
  {
    id: "a73",
    name: "Barbell Guillotine Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Chest, Shoulders",
    description: "A bench press variation lowering the bar to the neck, increasing upper chest and shoulder activation.",
    instructions: [
      "Set up for bench press, barbell in hands.",
      "Lower bar to neck, press back up."
    ],
    tips: [
      "Use a spotter for safety.",
      "Control the descent.",
      "Engage upper chest at press."
    ],
    variations: ["Paused Guillotine Press", "Incline Guillotine Press"]
  },
  {
    id: "a74",
    name: "Barbell JM Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Triceps, Chest, Shoulders",
    description: "A hybrid movement between a close-grip bench press and a triceps extension, targeting triceps strength.",
    instructions: [
      "Set up for bench press, hands shoulder-width apart.",
      "Lower bar toward chin, elbows forward.",
      "Press bar back up."
    ],
    tips: [
      "Keep elbows forward.",
      "Control the descent.",
      "Engage triceps at press."
    ],
    variations: ["Paused JM Press", "Smith Machine JM Press"]
  },
  {
    id: "a75",
    name: "Barbell Dead Stop Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Back, Arms, Core",
    description: "A row variation where the barbell is paused on the floor between reps, emphasizing starting strength and control.",
    instructions: [
      "Set up for bent-over row, barbell on floor.",
      "Row bar to lower ribs, pause on floor between reps."
    ],
    tips: [
      "Keep back flat.",
      "Engage core for stability.",
      "Control the row."
    ],
    variations: ["Pendlay Row", "Paused Dead Stop Row"]
  },
  {
    id: "a76",
    name: "Barbell Pendlay Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Back, Arms, Core",
    description: "A strict bent-over row variation where the barbell is paused on the floor between reps, emphasizing explosive pulling strength.",
    instructions: [
      "Set up for bent-over row, barbell on floor.",
      "Row bar to lower ribs, pause on floor between reps.",
      "Keep back parallel to floor throughout."
    ],
    tips: [
      "Keep back flat.",
      "Engage core for stability.",
      "Explode the bar off the floor."
    ],
    variations: ["Dead Stop Row", "Underhand Pendlay Row"]
  },
  {
    id: "a77",
    name: "Barbell Yates Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Back, Arms, Core",
    description: "A bent-over row variation with a more upright torso and underhand grip, emphasizing lower lats and biceps.",
    instructions: [
      "Set up for bent-over row, use underhand grip.",
      "Keep torso at 45-degree angle.",
      "Row bar to lower abs, squeeze shoulder blades."
    ],
    tips: [
      "Keep elbows close to body.",
      "Control the movement.",
      "Engage lats throughout."
    ],
    variations: ["Standard Bent-Over Row", "Pendlay Row"]
  },
  {
    id: "a78",
    name: "Barbell Meadows Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Back, Arms, Core",
    description: "A single-arm row variation using a landmine setup, targeting the upper back and lats.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Stand perpendicular, grip bar near collar.",
      "Row bar to hip, squeeze shoulder blade.",
      "Lower with control, repeat on both sides."
    ],
    tips: [
      "Keep hips square.",
      "Engage core for stability.",
      "Control the row."
    ],
    variations: ["Dumbbell Meadows Row", "Landmine Row"]
  },
  {
    id: "a79",
    name: "Barbell T-Bar Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, T-Bar Attachment",
    targetMuscles: "Back, Arms, Core",
    description: "A row variation using a T-bar attachment, emphasizing mid-back and lat development.",
    instructions: [
      "Set up barbell in T-bar attachment, load plates.",
      "Straddle bar, grip handles.",
      "Row bar to chest, squeeze shoulder blades.",
      "Lower with control."
    ],
    tips: [
      "Keep chest up.",
      "Engage lats throughout.",
      "Control the movement."
    ],
    variations: ["Landmine T-Bar Row", "Wide-Grip T-Bar Row"]
  },
  {
    id: "a80",
    name: "Barbell Seal Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Bench",
    targetMuscles: "Back, Arms",
    description: "A strict row performed lying face down on a bench, eliminating momentum and isolating the back.",
    instructions: [
      "Lie face down on bench, barbell below.",
      "Grip bar, row to bench, squeeze shoulder blades.",
      "Lower with control."
    ],
    tips: [
      "Keep body still.",
      "Engage lats and mid-back.",
      "Control the row."
    ],
    variations: ["Dumbbell Seal Row", "Chest-Supported Row"]
  },
  {
    id: "a81",
    name: "Barbell Inverted Row",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Rack",
    targetMuscles: "Back, Arms, Core",
    description: "A bodyweight row performed under a barbell in a rack, challenging upper back and core strength.",
    instructions: [
      "Set barbell in rack at waist height.",
      "Lie under bar, grip with overhand grip.",
      "Pull chest to bar, keep body straight.",
      "Lower with control."
    ],
    tips: [
      "Engage glutes and core.",
      "Keep body in straight line.",
      "Control the movement."
    ],
    variations: ["Feet-Elevated Inverted Row", "Underhand Inverted Row"]
  },
  {
    id: "a82",
    name: "Barbell Landmine Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Shoulders, Chest, Core",
    description: "A pressing movement using a landmine setup, emphasizing shoulder stability and core engagement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Stand facing bar, grip end with both hands or one hand.",
      "Press bar up and forward, extend arm(s).",
      "Lower with control."
    ],
    tips: [
      "Keep core braced.",
      "Do not arch back.",
      "Control the press."
    ],
    variations: ["Single-Arm Landmine Press", "Kneeling Landmine Press"]
  },
  {
    id: "a83",
    name: "Barbell Landmine Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat performed with a landmine setup, increasing core and upper body involvement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, feet shoulder-width.",
      "Squat down, keeping bar at chest.",
      "Drive up to standing."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the squat."
    ],
    variations: ["Goblet Landmine Squat", "Single-Arm Landmine Squat"]
  },
  {
    id: "a84",
    name: "Barbell Landmine Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Hamstrings, Glutes, Back, Core",
    description: "A deadlift performed with a landmine setup, emphasizing posterior chain and core stability.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Stand facing bar, grip end with both hands.",
      "Hinge at hips, lower bar to floor.",
      "Drive hips forward to stand."
    ],
    tips: [
      "Keep back flat.",
      "Engage glutes at top.",
      "Control the movement."
    ],
    variations: ["Single-Arm Landmine Deadlift", "Sumo Landmine Deadlift"]
  },
  {
    id: "a85",
    name: "Barbell Landmine Lateral Raise",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Shoulders, Core",
    description: "A lateral raise performed with a landmine setup, challenging shoulder stability and core engagement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Stand perpendicular, grip end of bar.",
      "Raise bar to side, keeping arm straight.",
      "Lower with control, repeat on both sides."
    ],
    tips: [
      "Keep core braced.",
      "Do not shrug shoulder.",
      "Control the raise."
    ],
    variations: ["Single-Arm Landmine Lateral Raise", "Kneeling Landmine Lateral Raise"]
  },
  {
    id: "a86",
    name: "Barbell Landmine Rotational Press",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Shoulders, Chest, Core",
    description: "A pressing movement with rotation using a landmine setup, developing power and core strength.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, rotate and press bar up and across body.",
      "Lower with control, repeat on both sides."
    ],
    tips: [
      "Rotate from hips.",
      "Engage core throughout.",
      "Control the press."
    ],
    variations: ["Single-Arm Rotational Press", "Kneeling Rotational Press"]
  },
  {
    id: "a87",
    name: "Barbell Landmine Rainbow",
    category: "Core Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Core, Shoulders",
    description: "A core exercise moving the barbell in an arc (rainbow) pattern using a landmine setup.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar with both hands, arms extended.",
      "Move bar in arc from hip to hip, keeping arms straight."
    ],
    tips: [
      "Keep core braced.",
      "Do not bend elbows.",
      "Control the arc."
    ],
    variations: ["Standing Landmine Rainbow", "Kneeling Landmine Rainbow"]
  },
  {
    id: "a88",
    name: "Barbell Landmine Anti-Rotation Press",
    category: "Core Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Core, Shoulders, Chest",
    description: "A pressing movement resisting rotation using a landmine setup, challenging core stability.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, press bar forward without rotating torso.",
      "Lower with control, repeat on both sides."
    ],
    tips: [
      "Engage core throughout.",
      "Do not rotate hips.",
      "Control the press."
    ],
    variations: ["Single-Arm Anti-Rotation Press", "Kneeling Anti-Rotation Press"]
  },
  {
    id: "a89",
    name: "Barbell Landmine Twister",
    category: "Core Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Core, Shoulders",
    description: "A rotational core exercise using a landmine setup, moving the barbell from side to side.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar with both hands, arms extended.",
      "Rotate bar from hip to hip, keeping arms straight."
    ],
    tips: [
      "Rotate from hips.",
      "Engage core throughout.",
      "Control the movement."
    ],
    variations: ["Standing Landmine Twister", "Kneeling Landmine Twister"]
  },
  {
    id: "a90",
    name: "Barbell Landmine Split Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A split squat performed with a landmine setup, increasing core and upper body involvement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, step back into split stance.",
      "Lower back knee toward floor, drive up to standing."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the squat."
    ],
    variations: ["Reverse Landmine Split Squat", "Single-Arm Landmine Split Squat"]
  },
  {
    id: "a91",
    name: "Barbell Landmine Curtsy Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A curtsy lunge performed with a landmine setup, increasing core and upper body involvement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, step one leg behind and across.",
      "Lower knee toward floor, drive up to standing."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the lunge."
    ],
    variations: ["Reverse Landmine Curtsy Lunge", "Single-Arm Landmine Curtsy Lunge"]
  },
  {
    id: "a92",
    name: "Barbell Landmine Lateral Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A lateral lunge performed with a landmine setup, increasing core and upper body involvement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, step out to side, bend knee.",
      "Push back to standing, repeat on both sides."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the lunge."
    ],
    variations: ["Reverse Landmine Lateral Lunge", "Single-Arm Landmine Lateral Lunge"]
  },
  {
    id: "a93",
    name: "Barbell Landmine Reverse Lunge",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A reverse lunge performed with a landmine setup, increasing core and upper body involvement.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, step back into lunge.",
      "Drive up to standing, repeat on both sides."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the lunge."
    ],
    variations: ["Forward Landmine Lunge", "Single-Arm Landmine Reverse Lunge"]
  },
  {
    id: "a94",
    name: "Barbell Landmine Good Morning",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Hamstrings, Glutes, Back, Core",
    description: "A good morning performed with a landmine setup, emphasizing posterior chain and core stability.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, hinge at hips, lower torso forward.",
      "Return to standing."
    ],
    tips: [
      "Keep back flat.",
      "Engage glutes at top.",
      "Control the movement."
    ],
    variations: ["Single-Arm Landmine Good Morning", "Sumo Landmine Good Morning"]
  },
  {
    id: "a95",
    name: "Barbell Landmine Thruster",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Landmine Attachment",
    targetMuscles: "Legs - Thighs, Shoulders, Core",
    description: "A compound movement combining a squat and overhead press with a landmine setup.",
    instructions: [
      "Set up barbell in landmine attachment.",
      "Hold end of bar at chest, squat down.",
      "Drive up and press bar overhead."
    ],
    tips: [
      "Keep core braced.",
      "Use leg drive for press.",
      "Control the movement."
    ],
    variations: ["Single-Arm Landmine Thruster", "Kneeling Landmine Thruster"]
  },
  {
    id: "a96",
    name: "Barbell Zercher Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Core, Arms",
    description: "A squat variation with the barbell held in the crooks of the elbows, increasing core and upper body involvement.",
    instructions: [
      "Set barbell in rack at elbow height.",
      "Cradle bar in elbows, hold close to chest.",
      "Squat down, keeping chest up and elbows high.",
      "Drive up to standing."
    ],
    tips: [
      "Keep core braced.",
      "Do not let elbows drop.",
      "Control the descent."
    ],
    variations: ["Zercher Deadlift", "Zercher Lunge"]
  },
  {
    id: "a97",
    name: "Barbell Jefferson Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Back, Core",
    description: "A unique deadlift variation performed straddling the barbell, challenging grip, core, and hip strength.",
    instructions: [
      "Straddle barbell, one hand in front, one behind.",
      "Set back flat, grip bar, engage core.",
      "Drive through legs to stand, keeping bar close.",
      "Lower with control."
    ],
    tips: [
      "Keep chest up.",
      "Engage core throughout.",
      "Control the movement."
    ],
    variations: ["Jefferson Squat", "Jefferson Curl"]
  },
  {
    id: "a98",
    name: "Barbell Hack Squat",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Legs - Thighs, Glutes, Core",
    description: "A squat variation with the barbell held behind the legs, emphasizing quads and glutes.",
    instructions: [
      "Stand with barbell behind legs, feet shoulder-width.",
      "Grip bar, keep chest up.",
      "Squat down, keeping bar close to legs.",
      "Drive up to standing."
    ],
    tips: [
      "Keep heels on floor.",
      "Engage core for stability.",
      "Control the movement."
    ],
    variations: ["Machine Hack Squat", "Dumbbell Hack Squat"]
  },
  {
    id: "a99",
    name: "Barbell Sumo Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell",
    targetMuscles: "Hamstrings, Glutes, Back, Adductors",
    description: "A deadlift variation with a wide stance, emphasizing inner thighs and glutes.",
    instructions: [
      "Stand with feet wide, toes out, barbell over mid-foot.",
      "Grip bar inside knees, set back flat.",
      "Drive through legs to stand, keeping bar close.",
      "Lower with control."
    ],
    tips: [
      "Keep chest up.",
      "Engage glutes at top.",
      "Control the descent."
    ],
    variations: ["Conventional Deadlift", "Sumo Block Pull"]
  },
  {
    id: "a100",
    name: "Barbell Deficit Sumo Deadlift",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Barbell, Platform",
    targetMuscles: "Hamstrings, Glutes, Back, Adductors",
    description: "A sumo deadlift performed while standing on a platform, increasing range of motion and posterior chain demand.",
    instructions: [
      "Stand on platform, feet wide, toes out, barbell over mid-foot.",
      "Grip bar inside knees, set back flat.",
      "Drive through legs to stand, keeping bar close.",
      "Lower with control."
    ],
    tips: [
      "Keep chest up.",
      "Engage glutes at top.",
      "Control the descent."
    ],
    variations: ["Sumo Deadlift", "Deficit Deadlift"]
  },
];

export default exercises; 
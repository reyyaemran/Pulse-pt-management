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
    id: "i1",
    name: "Chin-ups",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Pull up bar",
    targetMuscles: "Arms, Back",
    description: "A compound exercise that targets the upper body, particularly the back and biceps.",
    instructions: [
      "Stand under the chin-up bar and reach your arms overhead.",
      "Grasp the bar with your palms facing you, hands slightly wider than shoulder-width.",
      "Hang with your arms fully extended.",
      "Pull your body up until your chin is over the bar.",
      "Lower yourself back down with control.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Keep your core engaged throughout the movement.",
      "Avoid swinging or using momentum.",
      "Focus on pulling with your back muscles.",
      "Breathe out as you pull up, in as you lower down."
    ],
    variations: ["Assisted Chin-ups", "Negative Chin-ups", "Wide-grip Chin-ups"]
  },
  {
    id: "i2",
    name: "Farmer's Carry",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Dumbbells",
    targetMuscles: "Full Body/Integrated",
    description: "A functional exercise that builds full-body strength and stability while improving grip strength.",
    instructions: [
      "Stand with a dumbbell in each hand at your sides.",
      "Keep your chest up and shoulders back.",
      "Walk forward with a steady pace.",
      "Maintain a neutral spine throughout the movement.",
      "Keep your core engaged.",
      "Walk for the desired distance or time."
    ],
    tips: [
      "Start with lighter weights to master the form.",
      "Keep your shoulders level.",
      "Take shorter steps for better control.",
      "Focus on maintaining good posture."
    ],
    variations: ["Single-arm Farmer's Carry", "Overhead Farmer's Carry", "Suitcase Carry"]
  },
  {
    id: "i3",
    name: "Anti-rotation Reverse Lunge",
    category: "Strength Training",
    difficulty: "intermediate",
    equipment: "Resistance Bands/Cables",
    targetMuscles: "Full Body/Integrated",
    description: "A dynamic exercise that combines lower body strength with core stability and anti-rotation training.",
    instructions: [
      "Stand with feet hip-width apart, holding a resistance band or cable handle at chest height.",
      "Step back with one leg into a reverse lunge.",
      "Keep your front knee aligned with your ankle.",
      "Maintain resistance against the band's pull.",
      "Return to starting position.",
      "Repeat on the other side."
    ],
    tips: [
      "Keep your core engaged throughout the movement.",
      "Maintain an upright posture.",
      "Control the resistance throughout the entire movement.",
      "Focus on stability rather than speed."
    ],
    variations: ["Static Anti-rotation Hold", "Walking Anti-rotation Lunge", "Pallof Press"]
  },
  {
    id: "a1",
    name: "Alternate Leg Push-off",
    category: "Plyometrics",
    difficulty: "advanced",
    equipment: "Raised Platform/Box",
    targetMuscles: "Butt/Hips, Legs - Calves and Shins, Legs - Thighs",
    description: "An explosive plyometric exercise that develops power and coordination in the lower body.",
    instructions: [
      "Stand facing a raised platform or plyometric box.",
      "Place your right foot on the top of the step or box.",
      "Keep your left foot on the ground.",
      "Hinge from the hips to lean forward.",
      "Explosively push off with your right leg.",
      "Switch legs in mid-air.",
      "Land softly with the opposite foot on the box.",
      "Repeat the movement, alternating legs."
    ],
    tips: [
      "Start with a lower box height to master the movement.",
      "Land softly to reduce impact on joints.",
      "Keep your chest up and core engaged.",
      "Focus on explosive power rather than speed."
    ],
    variations: ["Single Leg Push-off", "Depth Jump", "Box Jump"]
  },
  {
    id: "a2",
    name: "Turkish Get-up",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Kettlebell",
    targetMuscles: "Full Body/Integrated",
    description: "A complex movement that requires strength, stability, and coordination throughout the entire body.",
    instructions: [
      "Lie on your back with a kettlebell in your right hand.",
      "Press the kettlebell overhead, keeping your arm straight.",
      "Bend your right knee and place your foot flat on the floor.",
      "Roll onto your left elbow while keeping the kettlebell stable.",
      "Push up to your left hand.",
      "Lift your hips off the ground.",
      "Sweep your left leg back into a lunge position.",
      "Stand up while keeping the kettlebell overhead.",
      "Reverse the movement to return to the starting position."
    ],
    tips: [
      "Keep your eyes on the kettlebell throughout the movement.",
      "Move slowly and with control.",
      "Master each step before progressing.",
      "Start with a light weight or no weight."
    ],
    variations: ["Half Turkish Get-up", "Bottoms-up Turkish Get-up", "Dumbbell Turkish Get-up"]
  },
  {
    id: "a3",
    name: "Muscle-up",
    category: "Strength Training",
    difficulty: "advanced",
    equipment: "Pull up bar",
    targetMuscles: "Full Body/Integrated",
    description: "An advanced calisthenics movement that combines a pull-up with a dip, requiring significant upper body strength and coordination.",
    instructions: [
      "Start hanging from a pull-up bar with a false grip.",
      "Pull yourself up explosively.",
      "As you reach the top of the pull-up, transition your hands over the bar.",
      "Complete the movement by pressing up into a dip position.",
      "Lower yourself back down with control.",
      "Repeat for the desired number of repetitions."
    ],
    tips: [
      "Master pull-ups and dips separately first.",
      "Practice the transition phase with assistance if needed.",
      "Keep your core engaged throughout the movement.",
      "Focus on explosive power in the pull phase."
    ],
    variations: ["Strict Muscle-up", "Kipping Muscle-up", "Ring Muscle-up"]
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
  }
]; 
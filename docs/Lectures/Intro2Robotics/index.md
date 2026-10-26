# Teach Me Robotics

*Intro to Robotics · Mechanical Aspects · 75-minute session*

Today the roles flip. I design and build hardware for a living, but I am not a roboticist. Your team's job is to teach me one mechanical piece of how robots work, using a strange and wonderful case study: robots that build structures far bigger than themselves.

> **How can a small robot build something larger than itself? I don't know. Teach me.**

<div style="position:relative; padding-top:56.25%; margin:1.5em 0;">
  <iframe src="https://player.vimeo.com/video/1188051754?fl=pl&amp;fe=vl"
          style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Teach Me Robotics: introduction video"></iframe>
</div>

---

## Session plan

| Time (min) | Activity |
|---|---|
| 0–10 | **Hook.** The robots on this page, and the challenge. |
| 10–15 | **Form teams of 3–4.** Count off (see *How teams form* below). Your team number is your slide in the shared deck. |
| 15–45 | **Investigate.** Read the fact sheet, research your theme, build one slide. |
| 45–70 | **Teach-back.** One team per theme, drawn at random, about 3 minutes each. I ask questions. Other teams on that theme may each add one point. |
| 70–75 | **Wrap.** I explain the robot back to you, using what you taught me. Quick exit poll. |

---

## Why voxels? A personal note

I was enthralled when I first saw these voxel systems in person at the MIT Center for Bits and Atoms exhibit at FAB26 in Boston, and honestly, I have always been enthralled by this approach. It is how biology works. A ribosome is tiny, yet it builds proteins from a small set of standard parts, the amino acids. Cells build tissues, and tissues build whole organisms many times larger than any single builder. Voxel robots borrow that idea: small, simple machines placing simple, identical parts to make something far larger than themselves.

<div class="slideshow" markdown="0">
  <div class="slides">
    <figure>
      <img src="images/voxel-exhibit-selfie.jpg" alt="Terence Fagan at the MIT CBA voxel exhibit, with voxel-built go-karts and a black voxel table behind him" loading="lazy">
      <figcaption>Me at the MIT Center for Bits and Atoms voxel exhibit, FAB26 Boston. Behind me: go-karts and a table built from voxels.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-kart-selfie.jpg" alt="Terence Fagan beside a go-kart whose frame is built from black voxels" loading="lazy">
      <figcaption>Next to a drivable go-kart. Its chassis is a voxel lattice.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-assembly-systems.jpg" alt="Voxel Assembly Systems sign beside two robots working on top of a wood and black voxel bridge" loading="lazy">
      <figcaption>The Voxel Assembly Systems display: two assembler robots standing on the bridge they are building.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-bridge-robots.jpg" alt="Two assembler robots standing on top of a bridge built from wood and black voxels" loading="lazy">
      <figcaption>The bridge up close. The robots stand on the structure itself; there is no gantry or crane around it.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-robot-closeup.jpg" alt="Close-up of a voxel assembly robot with motors, belts, and gripper feet on a black lattice" loading="lazy">
      <figcaption>An assembler robot up close: motors, belt drives, and feet that grip the lattice. Look for the actuators and transmissions.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-table-robots.jpg" alt="Assembler robots displayed on a table built from black voxels" loading="lazy">
      <figcaption>Assembler robots on display atop a table made of the same black voxels they place.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-black-lattice.jpg" alt="Close-up of a black lattice block made of interlocking voxels" loading="lazy">
      <figcaption>Black lattice voxels. Each cell is light and open, yet the assembled block is stiff.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-kart-wood.jpg" alt="Go-kart with a frame of wood and black voxels, off-road tires, and a steering wheel" loading="lazy">
      <figcaption>A go-kart chassis built from wood and black voxels, with standard wheels and steering bolted on.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-kart-motor.jpg" alt="Go-kart with a black and steel voxel frame, electric motor, and steering column" loading="lazy">
      <figcaption>A second kart with a black and steel voxel frame, carrying an electric motor and steering.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-white-bench.jpg" alt="White 3D-printed voxels assembled into a bench-like structure on two legs" loading="lazy">
      <figcaption>White voxels assembled into a bench. The same small part repeats to make legs, span, and deck.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-sustainable-arch.jpg" alt="White voxel arch, bench, and column next to a Sustainable Voxel Construction sign" loading="lazy">
      <figcaption>Sustainable Voxel Construction: CBA's partnership with Bhutan's Druk Holding and Investments and the Jigme Namgyel Wangchuck Super Fablab.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-wall-arch.jpg" alt="A voxel wall with a doorway, framing a tall column built from wooden voxels" loading="lazy">
      <figcaption>A voxel wall and doorway framing a tall column of wooden voxels. Different materials, same building logic.</figcaption>
    </figure>
    <figure>
      <img src="images/voxel-wall-room.jpg" alt="A room-sized structure of white voxel walls and a wooden voxel frame" loading="lazy">
      <figcaption>A room-sized enclosure: white voxel walls joined to a wooden voxel frame.</figcaption>
    </figure>
  </div>
  <button class="ss-btn ss-prev" type="button" aria-label="Previous photo">&#8249;</button>
  <button class="ss-btn ss-next" type="button" aria-label="Next photo">&#8250;</button>
  <div class="ss-count" aria-live="polite">1 / 13</div>
</div>

*Photos: Terence Fagan.*

---

## Fact sheet: robots that build things bigger than themselves

Instead of making a large machine in one piece, build it from many small, identical lattice blocks called **voxels**, and let small robots do the assembly. The work comes from MIT's Center for Bits and Atoms (CBA) and NASA.

**Key terms**

- **Voxel:** a lattice-structured building block. Voxels assemble into strong, stiff objects such as airplane wings, wind turbine blades, and space structures.
- **Relative robot:** a robot that walks on the structure it is building and uses the lattice itself to know where it is.

### Robot 1: BILL-E (MIT CBA, 2019)

![BILL-E robot assembling a voxel lattice](images/bill-e.jpg)
*Image: Benjamin Jenett / MIT CBA, via [MIT News](https://news.mit.edu/2019/robots-large-structures-little-pieces-1016)*

- Bipedal Isotropic Lattice Locomoting Explorer.
- A small arm: two long segments hinged in the middle, with a clamp at each end.
- Each step onto a voxel resets its sense of position relative to the parts under it.
- Design principle: the precision lives in the structure, not the robot.

### Robot 2: NASA ARMADAS (SOLL-E + MMIC-I)

![NASA ARMADAS robots building a voxel structure](images/armadas.jpg)
*Image: NASA / Dominic Hart, via [NASA ARMADAS](https://www.nasa.gov/directorates/spacetech/game_changing_development/projects/armadas)*

- Two builder robots (SOLL-E) and one fastening robot (MMIC-I).
- Built a shed-sized shelter from 256 voxels in about 100 hours.
- Voxels join with genderless, reversible fasteners held in each face, driven by the robot, and preloading the joint.

<div style="position:relative; padding-top:56.25%; margin:1em 0 0.4em;">
  <iframe src="https://www.youtube-nocookie.com/embed/AqAfCX4Razs"
          style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="NASA Ames Space Robots Assembling Structures - ARMADAS"></iframe>
</div>

*Video: [NASA Ames Space Robots Assembling Structures - ARMADAS](https://www.youtube.com/watch?v=AqAfCX4Razs) (YouTube)*

### Robot 3: MILAbot (MIT CBA, 2026)

![MILAbot inchworm robot placing voxels](images/milabot.jpg)
*Image: MIT CBA, via [MIT News](https://news.mit.edu/2026/robotically-assembled-building-blocks-makes-construction-more-efficient-and-sustainable-0428)*

- Modular Inchworm Lattice Assembler, with a gripper at each end.
- Drops voxels into place, then steps on them so the snap-fit pieces interlock.
- Interlocking gives good strength with fewer connectors, so building goes faster.

### Where it's heading

Newer voxels pass power and data from one unit to the next. Robots built from strings of voxels can decide whether to build a structure, a copy of themselves, or a bigger robot.

---

## Team worksheet: teach Terence your theme

**Team deck:** <a href="https://docs.google.com/presentation/d/1rtB_HWYR3vgVQjfgdPKjgGyzTZzczim0/edit" target="_blank" rel="noopener">Open the Teach Me Robotics team deck</a> and go to your team's slide.

You have 30 minutes to build one slide in the shared deck. Assume your audience is a fabrication expert who knows how to make parts but not how robots move.

1. **What is it?** One plain-English sentence. Define any jargon you use.
2. **How does it work mechanically?** One diagram or sketch. A phone photo of a hand sketch is fine.
3. **Real robot example.** Pick any robot that is *not* on this page. Name it, add an image, say what it uses.
4. **The tradeoff.** What do designers gain, and what do they give up?
5. **Voxel robot connection.** Use the voxel robot assigned to your team (see below). Where does your theme show up in it, or fail to show up?
6. **Your question for Terence.** What should a fabricator understand about your theme?

### How teams form

1. Count the room, divide by 4, and round up. That is the number of teams.
2. Count off from 1 up to that number. Your number is your team.
3. Your theme is your team number, starting over after 8: Team 9 gets Theme 1, Team 10 gets Theme 2, and so on.
4. Your voxel robot for prompt 5 rotates by team number:
    - **BILL-E:** Teams 1, 4, 7, 10, 13, 16, 19, 22, 25
    - **ARMADAS:** Teams 2, 5, 8, 11, 14, 17, 20, 23
    - **MILAbot:** Teams 3, 6, 9, 12, 15, 18, 21, 24
5. Find your team's slide in the shared deck: <strong><a href="https://docs.google.com/presentation/d/1rtB_HWYR3vgVQjfgdPKjgGyzTZzczim0/edit" target="_blank" rel="noopener">Teach Me Robotics team deck</a></strong>

| Students | Teams | Team size | Teams per theme |
|---|---|---|---|
| 40 | 10 | 4 | 1–2 |
| 60 | 15 | 4 | 1–2 |
| 80 | 20 | 4 | 2–3 |
| 100 | 25 | 4 | 3–4 |

### Themes

| # | Theme | Teams | Starter question |
|---|---|---|---|
| 1 | Actuation | 1, 9, 17, 25 | If you were choosing how to power a robot that carries parts across a structure all day, what would you weigh, and what would you sacrifice? |
| 2 | Transmissions | 2, 10, 18 | Where should precision come from: the motor, the gears, or the structure the robot walks on? Make the case for your choice. |
| 3 | Linkages and kinematics | 3, 11, 19 | What happens to a robot's design as you add or remove joints? Where is the sweet spot between simple and capable, and how would you find it? |
| 4 | End effectors | 4, 12, 20 | Should you design the robot around the parts or the parts around the robot? What does each choice make easy, and what does it make hard? |
| 5 | Locomotion | 5, 13, 21 | Wheels, legs, or inchworm: how does the ground a robot moves on shape the way it moves? What would change if that ground were moving, unfinished, or in space? |
| 6 | Structures and materials | 6, 14, 22 | Why build something big out of many small pieces instead of one large one? Where does that idea win, and where does it fail? |
| 7 | Compliance and soft robotics | 7, 15, 23 | Engineers usually fight "slop" in a machine. When might building flexibility in on purpose make a robot better, and what does it cost? |
| 8 | Robots that build | 8, 16, 24 | Nature builds organisms far larger than any single cell. What could robot builders borrow from biology, and what might never transfer? |

---

## Links for teams

- [MIT News (2019): Assembler robots make large structures from little pieces](https://news.mit.edu/2019/robots-large-structures-little-pieces-1016)
- [MIT News (2022): Robots that can build bigger robots](https://news.mit.edu/2022/assembler-robots-structures-voxels-1122)
- [MIT News (2026): Robotically assembled building blocks (MILAbot)](https://news.mit.edu/2026/robotically-assembled-building-blocks-makes-construction-more-efficient-and-sustainable-0428)
- [NASA: ARMADAS project](https://www.nasa.gov/directorates/spacetech/game_changing_development/projects/armadas)
- [Jenett et al. (2019), IEEE Robotics and Automation Letters (PDF)](https://bej.pages.cba.mit.edu/home/19-0514_.pdf)

### Further reading: academic articles

Start with the one tagged for your theme. You don't need to read the whole paper; the abstract, figures, and conclusion are enough for today.

| Robot / topic | Article | Best for |
|---|---|---|
| Voxels (foundation) | Cheung, K. C., & Gershenfeld, N. (2013). [Reversibly assembled cellular composite materials](https://cba.mit.edu/docs/papers/13.09.Science.pdf). *Science*, 341, 1219–1221. | Structures and materials |
| BILL-E | Jenett, B., Abdel-Rahman, A., Cheung, K., & Gershenfeld, N. (2019). [Material-robot system for assembly of discrete cellular structures](https://cba.mit.edu/docs/papers/19.07.materialrobot.pdf). *IEEE Robotics and Automation Letters*. | Locomotion, Linkages, End effectors |
| Robots building robots | Abdel-Rahman, A., Cameron, C., Jenett, B., Smith, M., & Gershenfeld, N. (2022). [Self-replicating hierarchical modular robotic swarms](https://cba.mit.edu/docs/papers/22.11.Nature.pdf). *Nature Communications Engineering*, 1, 1–10. | Robots that build |
| MILAbot | Smith, M., Richard, P., Parra Rubio, A., & Gershenfeld, N. (2026). [Comparative evaluation of robotically assembled discrete lattice systems for sustainable construction](https://cba.mit.edu/docs/papers/26.04.Smith.Voxels.pdf). *Automation in Construction*, 187, 106952. | Actuation, Transmissions |
| NASA ARMADAS | Gregg, C. E., Catanoso, D., Formoso, O. I. B., Kostitsyna, I., Ochalek, M. E., Olatunde, T. J., Park, I. W., Sebastianelli, F. M., Taylor, E. M., Trinh, G. T., & Cheung, K. C. (2024). [Ultralight, strong, and self-reprogrammable mechanical metamaterials](https://doi.org/10.1126/scirobotics.adi2746). *Science Robotics*, 9(86). | Compliance, Structures, Robots that build |
| ARMADAS precision | Gregg, C. E., & Cheung, K. C. (2024). [Precision in assembled discrete lattice space structures for next-generation ISAM applications](https://ntrs.nasa.gov/citations/20240000666). *IEEE Aerospace Conference*. | Transmissions, Linkages |
| ARMADAS, next steps | Ritter, M. K., Bokhari, I., Gloyd, J. T., Woodson, J. W., Adriaanse, D. S., & Gregg, C. E. [Robotic infrastructure construction and maintenance systems for the Moon, Mars, and other missions](https://ntrs.nasa.gov/api/citations/20250010156/downloads/ASCE_295.pdf). NASA Ames / M3 Engineering. | Robots that build |
| Thesis (deep dive) | Smith, M. (2026). [Scalable robotic voxel construction](https://cba.mit.edu/docs/theses/26.09.Smith.pdf) [Doctoral thesis, MIT Center for Bits and Atoms]. | Any theme |

More: [CBA papers](https://cba.mit.edu/docs/papers/index.html) · [CBA theses](https://cba.mit.edu/docs/theses/index.html)

*Images credited to MIT News / MIT Center for Bits and Atoms and NASA. Used for classroom instruction.*

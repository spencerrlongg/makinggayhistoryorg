<template>
  <div>
    <div class="container container--narrow content-page">
      <h1>{{ heading }}</h1>
      <p v-html="cta"></p>
      <p style="width: 100%; margin-bottom: 42px">
        Making Gay History is a 501(c)(3) nonprofit organization that addresses the absence of substantive, in-depth LGBTQ-inclusive American history from the public discourse and the classroom by
        providing a window into that history through the stories of the people who helped a despised minority take its rightful place in society as full and equal citizens. <br />In so doing, we aim
        to encourage connection, pride, and solidarity within the LGBTQ community and to provide an entry point for both allies and the general public to its largely hidden history.
      </p>
      <div class="flexbox">
        <img src="~assets/img/Eric-Marcus-Head-Shot-Med-Res-16.jpg" :alt="imageAlt[0]" />
        <p v-html="body[0]"></p>
      </div>
    </div>
    <div class="container container--narrow content-page">
      <h1>Board of Directors</h1>
      <div class="board-section">
        <div class="board-member-container">
          <img src="~assets/img/board_members/sbaloue.jpeg" alt="Sydney Baloue Headshot" />
          <div>
            <span class="strong">Sydney Baloue </span>
            <span>-</span>
            <p>Journalist; TV Writer; Co-Executive Producer of HBO Max’s Legendary; Ballroom Culture Archivist and Historian</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/lbradbury.jpeg" alt="Louis Bradbury Headshot" />
          <div>
            <span class="strong">Louis Bradbury </span>
            <span>-</span>
            <p>President, Calamus Foundation</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/mcadagin.jpeg" alt="Mary Cadagin Headshot" />
          <div>
            <span class="strong">Mary Cadagin </span>
            <span>-</span>
            <p>Retired Chief Information Officer, Open Society Foundations</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/cfurjanic.jpeg" alt="Cheryl Furjanic Headshot" />
          <div>
            <span class="strong">Cheryl Furjanic </span>
            <span>-</span>
            <p>Filmmaker (<i>Back on Board: Greg Louganis; Stonewall: The Making of a Monument</i>); Documentary Production Instructor, New York University</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/jhatch.jpeg" alt="Jennifer Hatch Headshot" />
          <div>
            <span class="strong">Jennifer Hatch </span>
            <span>-</span>
            <p>President, Christopher Street Financial</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/jhumphrie.jpeg" alt="Jamila Humphrie Headshot" />
          <div>
            <span class="strong">Jamila Humphrie </span>
            <span>-</span>
            <p>Ph.D., Educational Leadership, New York University; Partnership Director, Equal Opportunity Schools</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/kjennings.jpeg" alt="Kevin Jennings Headshot" />
          <div>
            <span class="strong">Kevin Jennings </span>
            <span>-</span>
            <p>CEO, Lambda Legal</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/llima.jpeg" alt="Lauraberth Lima Headshot" />
          <div>
            <span class="strong">Lauraberth Lima </span>
            <span>-</span>
            <p>Cultural Consultant; Visiting Assistant Professor of Museum Studies, New York University</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/klustbader.jpeg" alt="Ken Lustbader Headshot" />
          <div>
            <span class="strong">Ken Lustbader </span>
            <span>-</span>
            <p>Co-Director, NYC LGBT Historic Sites Project</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/rmorales.jpeg" alt="Richard Morales Headshot" />
          <div>
            <span class="strong">Richard Morales </span>
            <span>-</span>
            <p>Manager of Community Partnerships, NYC Lesbian, Gay, Bisexual & Transgender Community Center</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/braab.jpeg" alt="Barbara Raab Headshot" />
          <div>
            <span class="strong">Barbara Raab </span>
            <span>-</span>
            <p>Senior Program Adviser, Jonathan Logan Family Foundation; Senior Producer of Podcasts, NBC News</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/hlray.jpeg" alt="H.L. Ray Headshot" />
          <div>
            <span class="strong">H.L. Ray </span>
            <span>-</span>
            <p>Former Head of Partnerships and Programming, Samsung Electronics America; Board Member, Stonewall Inn Gives Back Initiative; Adviser, Gaingels Syndicate</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/briskin.jpeg" alt="Benjamin Riskin Headshot" />
          <div>
            <span class="strong">Benjamin Riskin </span>
            <span>-</span>
            <p>Principal, Room Tone LLC</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/jthomas.jpeg" alt="June Thomas Headshot" />
          <div>
            <span class="strong">June Thomas </span>
            <span>-</span>
            <p>Senior Managing Producer, Slate Podcasts</p>
          </div>
        </div>
        <div class="board-member-container">
          <img src="~assets/img/board_members/jweiss-berman.jpeg" alt="Jenna Weiss-Berman Headshot" />
          <div>
            <span class="strong">Jenna Weiss-Berman </span>
            <span>-</span>
            <p>Co-Founder, Pineapple Street Studios</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: "About Making Gay History",
      cta: "",
      imageAlt: ["Headshot of Eric Marcus"],
      body: [
        "<strong>Eric Marcus</strong> is executive director of Making Gay History and founder and host of the Making Gay History podcast. He is the author of a dozen books, including two editions of <i>Making Gay History</i> (the original 1992 edition is entitled <i>Making History</i>), <i>Why Suicide?</i>, and <i>Breaking the Surface</i>, the #1 <i>New York Times</i> bestselling autobiography of Olympic diving champion Greg Louganis. Eric is also the co-producer of <a href='https://fortunoff.library.yale.edu/education/podcasts/'>Those Who Were There</a>, a podcast drawn from the Fortunoff Video Archive for Holocaust Testimonies. And he is the founder and chair of the <a href='https://stonewall50consortium.org/'>Stonewall 50 Consortium</a>. Learn more about Eric in <a href='https://www.nbcnews.com/video/-i-owe-it-to-the-people-who-came-before-me-uncovering-the-gay-icons-forgotten-by-history-61449797723'>this NBC News profile</a>.",
      ],
    }
  },
  transition: "fade",
}
</script>

<style scoped>
.board-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: space-between;
  gap: 9px;
}
.board-member-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 32%;
}

.board-member-container img {
  width: 100%;
}

.board-member-container p {
  width: 100%;
}

.strong {
  font-weight: bold;
}

.flexbox {
  margin: 1rem 0;
}
.flexbox:not(:last-of-type) {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .flexbox:not(:last-of-type) {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .board-member-container {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
}
hr {
  border: 0;
  margin: 0;
  border-top: 1px solid #000;
}
h1 {
  margin-bottom: 0.25rem;
}
.content-page > p {
  margin-bottom: 1.5rem;
}
</style>

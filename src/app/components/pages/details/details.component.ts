import { Component, OnInit } from '@angular/core';
import { MoviesFacade } from 'src/app/store/facade/movies.facade';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  currentMovie: any = {};

  fake = {
    id: 'tt0468569',
    title: 'The Dark Knight',
    originalTitle: '',
    fullTitle: 'The Dark Knight (2008)',
    type: 'Movie',
    year: '2008',
    image:
      'https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6791_AL_.jpg',
    releaseDate: '2008-07-16',
    runtimeMins: '152',
    runtimeStr: '2h 32mins',
    plot: 'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.',
    plotLocal: '',
    plotLocalIsRtl: false,
    awards:
      'Top Rated Movies #4 | Won 2 Oscars. Another 157 wins & 163 nominations.',
    directors: 'Christopher Nolan',
    directorList: [
      {
        id: 'nm0634240',
        name: 'Christopher Nolan',
      },
    ],
    writers: 'Jonathan Nolan, Christopher Nolan, David S. Goyer, Bob Kane',
    writerList: [
      {
        id: 'nm0634300',
        name: 'Jonathan Nolan',
      },
      {
        id: 'nm0634240',
        name: 'Christopher Nolan',
      },
      {
        id: 'nm0275286',
        name: 'David S. Goyer',
      },
      {
        id: 'nm0004170',
        name: 'Bob Kane',
      },
    ],
    stars: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    starList: [
      {
        id: 'nm0000288',
        name: 'Christian Bale',
      },
      {
        id: 'nm0005132',
        name: 'Heath Ledger',
      },
      {
        id: 'nm0001173',
        name: 'Aaron Eckhart',
      },
      {
        id: 'nm0000323',
        name: 'Michael Caine',
      },
    ],
    actorList: [
      {
        id: 'nm0000288',
        image:
          'https://imdb-api.com/images/original/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Christian Bale',
        asCharacter: 'Bruce Wayne',
      },
      {
        id: 'nm0005132',
        image:
          'https://imdb-api.com/images/original/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjE1MDE0._V1_Ratio0.7273_AL_.jpg',
        name: 'Heath Ledger',
        asCharacter: 'Joker',
      },
      {
        id: 'nm0001173',
        image:
          'https://imdb-api.com/images/original/MV5BMTc4MTAyNzMzNF5BMl5BanBnXkFtZTcwMzQ5MzQzMg@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Aaron Eckhart',
        asCharacter: 'Harvey Dent',
      },
      {
        id: 'nm0000323',
        image:
          'https://imdb-api.com/images/original/MV5BMjAwNzIwNTQ4Ml5BMl5BanBnXkFtZTYwMzE1MTUz._V1_Ratio0.7273_AL_.jpg',
        name: 'Michael Caine',
        asCharacter: 'Alfred',
      },
      {
        id: 'nm0350454',
        image:
          'https://imdb-api.com/images/original/MV5BMTM1MjY3NzA4NF5BMl5BanBnXkFtZTcwNzE4MjMyMw@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Maggie Gyllenhaal',
        asCharacter: 'Rachel',
      },
      {
        id: 'nm0000198',
        image:
          'https://imdb-api.com/images/original/MV5BMTc3NTM4MzQ5MV5BMl5BanBnXkFtZTcwOTE4MDczNw@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Gary Oldman',
        asCharacter: 'Gordon',
      },
      {
        id: 'nm0000151',
        image:
          'https://imdb-api.com/images/original/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Morgan Freeman',
        asCharacter: 'Lucius Fox',
      },
      {
        id: 'nm1010931',
        image:
          'https://imdb-api.com/images/original/MV5BOGUzODlhNDEtYzFiMS00YjIyLWFkYjItOGVjYWZhN2Q2MDkxXkEyXkFqcGdeQXVyMTI4MzU0Mg@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Monique Gabriela Curnen',
        asCharacter: 'Ramirez',
      },
      {
        id: 'nm0212939',
        image:
          'https://imdb-api.com/images/original/MV5BMTM5MTc5MjE3OF5BMl5BanBnXkFtZTcwNzg1MjQyOA@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Ron Dean',
        asCharacter: 'Wuertz',
      },
      {
        id: 'nm0614165',
        image:
          'https://imdb-api.com/images/original/MV5BMTUzMjg1NzIyOV5BMl5BanBnXkFtZTYwMzg2Mjgy._V1_Ratio0.7273_AL_.jpg',
        name: 'Cillian Murphy',
        asCharacter: 'Scarecrow',
      },
      {
        id: 'nm1977856',
        image:
          'https://imdb-api.com/images/original/MV5BNDA5NDc1NTAwNV5BMl5BanBnXkFtZTgwNDA4Mjk5MjE@._V1_Ratio0.7273_AL_.jpg',
        name: 'Chin Han',
        asCharacter: 'Lau',
      },
      {
        id: 'nm0004801',
        image:
          'https://imdb-api.com/images/original/MV5BMjg5NGIwZDMtNTkwMy00MjVlLWI4OWUtNWEzYWY2NmRkNGVlXkEyXkFqcGdeQXVyMTk3MzM4NDU@._V1_Ratio0.7273_AL_.jpg',
        name: 'Nestor Carbonell',
        asCharacter: 'Mayor',
      },
      {
        id: 'nm0000616',
        image:
          'https://imdb-api.com/images/original/MV5BMTQ2MTk3OTgwM15BMl5BanBnXkFtZTcwODE1OTIwMw@@._V1_Ratio0.7273_AL_.jpg',
        name: 'Eric Roberts',
        asCharacter: 'Maroni',
      },
      {
        id: 'nm0182662',
        image:
          'https://imdb-api.com/images/original/MV5BMTMxMjE2MTU5M15BMl5BanBnXkFtZTYwNTM2ODM0._V1_Ratio0.7273_AL_.jpg',
        name: 'Ritchie Coster',
        asCharacter: 'Chechen',
      },
      {
        id: 'nm0001309',
        image:
          'https://imdb-api.com/images/original/MV5BNTA5NGM1OTItM2JhZS00OTk1LWFiMzYtZjlhODIwZmIzOWVkXkEyXkFqcGdeQXVyODUwMjgxNDU@._V1_Ratio0.7727_AL_.jpg',
        name: 'Anthony Michael Hall',
        asCharacter: 'Mike Engel',
      },
    ],
    fullCast: null,
    genres: 'Action, Crime, Drama, Thriller',
    genreList: [
      {
        key: 'Action',
        value: 'Action',
      },
      {
        key: 'Crime',
        value: 'Crime',
      },
      {
        key: 'Drama',
        value: 'Drama',
      },
      {
        key: 'Thriller',
        value: 'Thriller',
      },
    ],
    companies: 'Warner Bros., Legendary Entertainment, Syncopy',
    companyList: [
      {
        id: 'co0002663',
        name: 'Warner Bros.',
      },
      {
        id: 'co0159111',
        name: 'Legendary Entertainment',
      },
      {
        id: 'co0147954',
        name: 'Syncopy',
      },
    ],
    countries: 'USA, UK',
    countryList: [
      {
        key: 'USA',
        value: 'USA',
      },
      {
        key: 'UK',
        value: 'UK',
      },
    ],
    languages: 'English, Mandarin',
    languageList: [
      {
        key: 'English',
        value: 'English',
      },
      {
        key: 'Mandarin',
        value: 'Mandarin',
      },
    ],
    contentRating: 'PG-13',
    imDbRating: '9.0',
    imDbRatingVotes: '2342007',
    metacriticRating: '84',
    ratings: null,
    wikipedia: null,
    posters: null,
    images: null,
    trailer: null,
    boxOffice: {
      budget: '$185,000,000 (estimated)',
      openingWeekendUSA: '$158,411,483, 20 July 2008',
      grossUSA: '$534,858,444',
      cumulativeWorldwideGross: '$1,005,973,645',
    },
    tagline: 'Why So Serious?',
    keywords: 'dc comics,joker,psychopath,clown,criminal mastermind',
    keywordList: [
      'dc comics',
      'joker',
      'psychopath',
      'clown',
      'criminal mastermind',
    ],
    similars: [
      {
        id: 'tt1345836',
        title: 'The Dark Knight Rises',
        fullTitle: 'The Dark Knight Rises (2012)',
        year: '2012',
        image:
          'https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.6737_AL_.jpg',
        plot: "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        directors: 'Christopher Nolan',
        stars: 'Christian Bale, Tom Hardy, Anne Hathaway',
        genres: 'Action, Adventure',
        imDbRating: '8.4',
      },
      {
        id: 'tt0372784',
        title: 'Batman Begins',
        fullTitle: 'Batman Begins (2005)',
        year: '2005',
        image:
          'https://imdb-api.com/images/original/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6737_AL_.jpg',
        plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
        directors: 'Christopher Nolan',
        stars: 'Christian Bale, Michael Caine, Ken Watanabe',
        genres: 'Action, Adventure',
        imDbRating: '8.2',
      },
      {
        id: 'tt1375666',
        title: 'Inception',
        fullTitle: 'Inception (2010)',
        year: '2010',
        image:
          'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6737_AL_.jpg',
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        directors: 'Christopher Nolan',
        stars: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
        genres: 'Action, Adventure, Sci-Fi',
        imDbRating: '8.8',
      },
      {
        id: 'tt0111161',
        title: 'The Shawshank Redemption',
        fullTitle: 'The Shawshank Redemption (1994)',
        year: '1994',
        image:
          'https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        directors: 'Frank Darabont',
        stars: 'Tim Robbins, Morgan Freeman, Bob Gunton',
        genres: 'Drama',
        imDbRating: '9.3',
      },
      {
        id: 'tt7286456',
        title: 'Joker',
        fullTitle: 'Joker (2019)',
        year: '2019',
        image:
          'https://imdb-api.com/images/original/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6737_AL_.jpg',
        plot: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
        directors: 'Todd Phillips',
        stars: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
        genres: 'Crime, Drama, Thriller',
        imDbRating: '8.4',
      },
      {
        id: 'tt0816692',
        title: 'Interstellar',
        fullTitle: 'Interstellar (2014)',
        year: '2014',
        image:
          'https://imdb-api.com/images/original/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6737_AL_.jpg',
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        directors: 'Christopher Nolan',
        stars: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
        genres: 'Adventure, Drama, Sci-Fi',
        imDbRating: '8.6',
      },
      {
        id: 'tt0109830',
        title: 'Forrest Gump',
        fullTitle: 'Forrest Gump (1994)',
        year: '1994',
        image:
          'https://imdb-api.com/images/original/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6842_AL_.jpg',
        plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        directors: 'Robert Zemeckis',
        stars: 'Tom Hanks, Robin Wright, Gary Sinise',
        genres: 'Drama, Romance',
        imDbRating: '8.8',
      },
      {
        id: 'tt0137523',
        title: 'Fight Club',
        fullTitle: 'Fight Club (1999)',
        year: '1999',
        image:
          'https://imdb-api.com/images/original/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6737_AL_.jpg',
        plot: 'A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter),... See full summary »',
        directors: 'David Fincher',
        stars: 'Brad Pitt, Edward Norton, Meat Loaf',
        genres: 'Drama',
        imDbRating: '8.8',
      },
      {
        id: 'tt0110912',
        title: 'Pulp Fiction',
        fullTitle: 'Pulp Fiction (1994)',
        year: '1994',
        image:
          'https://imdb-api.com/images/original/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6842_AL_.jpg',
        plot: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        directors: 'Quentin Tarantino',
        stars: 'John Travolta, Uma Thurman, Samuel L. Jackson',
        genres: 'Crime, Drama',
        imDbRating: '8.9',
      },
      {
        id: 'tt0068646',
        title: 'The Godfather',
        fullTitle: 'The Godfather (1972)',
        year: '1972',
        image:
          'https://imdb-api.com/images/original/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7053_AL_.jpg',
        plot: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        directors: 'Francis Ford Coppola',
        stars: 'Marlon Brando, Al Pacino, James Caan',
        genres: 'Crime, Drama',
        imDbRating: '9.2',
      },
      {
        id: 'tt0167260',
        title: 'The Lord of the Rings: The Return of the King',
        fullTitle: 'The Lord of the Rings: The Return of the King (2003)',
        year: '2003',
        image:
          'https://imdb-api.com/images/original/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6737_AL_.jpg',
        plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        directors: 'Peter Jackson',
        stars: 'Elijah Wood, Viggo Mortensen, Ian McKellen',
        genres: 'Action, Adventure, Drama',
        imDbRating: '8.9',
      },
      {
        id: 'tt0133093',
        title: 'The Matrix',
        fullTitle: 'The Matrix (1999)',
        year: '1999',
        image:
          'https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6737_AL_.jpg',
        plot: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
        directors: 'Directors: Lana Wachowski, Lilly Wachowski',
        stars: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
        genres: 'Action, Sci-Fi',
        imDbRating: '8.7',
      },
    ],
    tvSeriesInfo: null,
    tvEpisodeInfo: null,
    errorMessage: '',
  };
  constructor(private moviesFacade: MoviesFacade) {}

  ngOnInit(): void {
    this.moviesFacade.currentMovie$.subscribe((data) => {
      console.log(data);
      this.currentMovie = data;
    });
  }
}

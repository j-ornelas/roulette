const fs = require('fs');

// We're keeping the years so that we can grab them later;
const list = `The Best Films of 2018 (so far)

1. First Reformed
2. Minding the Gap
3. BlacKkKlansman
4. Isle of Dogs
5. Leave No Trace
6. Dangerous on the Way
7. Paddington 2
8. Mission: Impossible – Fallout
9. Baby Brother
10. Eighth Grade

The Best Films of 2017

1. Phantom Thread
2. Wormwood
3. Ex Libris: New York Public Library
4. A Ghost Story
5. Manifesto
6. Faces Places
7. Machines
8. The Meyerowitz Stories
9. LA 92
10. First They Killed My Father

The Best Films of 2016

1. Moonlight
2. Manchester by the Sea
3. La La Land
4. The Lobster
5. Homo Sapiens
6. 20th Century Women
7. Shin Godzilla
8. Cemetery of Splendour
9. Jackie
10. Thunder Road

The Best Films of 2015

1. Making a Murderer
2. Beasts of No Nation
3. Anomalisa
4. About Elly
5. Hard to Be a God
6. Cartel Land
7. World of Tomorrow
8. Son of Saul
9. Approaching the Elephant
10. Out 1 & (T)error (tie)

The Best Films of 2014

1. Citizenfour
2. Manakamana
3. The Overnighters
4. Under the Skin
5. Virunga
6. The Grand Budapest Hotel
7. Ida
8. The Dance of Reality
9. Stray Dogs & Single Stream (tie)
10. Life Itself

The Best Films of 2013

1. Let the Fire Burn
2. Her
3. At Berkeley
4. First Cousin Once Removed
5. Gravity
6. Before Midnight
7. 12 Years a Slave
8. Post Tenebras Lux
9. Drug War
10. It’s Such a Beautiful Day

The Best Films of 2012

1. Samsara
2. Miss Bala
3. Amour
4. Once Upon a Time in Anatolia
5. Seven Psychopaths
6. The Kid with a Bike
7. 5 Broken Cameras
8. Beasts of the Southern Wild
9. Holy Motors
10. The Imposter

The Best Films of 2011

1. Take Shelter
2. The Tree of Life
3. A Separation
4. Shame
5. The Interrupters
6. 13 Assassins
7. Putty Hill
8. Incendies
9. Nostalgia for the Light
10. The Artist

The Best Films of 2010

1. Lebanon
2. Blue Valentine
3. Inside Job & Restrepo (tie)
4. Carlos
5. 45365
6. The Temptation of St. Tony
7. Exit Through the Gift Shop
8. It Felt Like a Kiss
9. Alamar
10. Disorder

The Best Films of 2009

1. The White Ribbon
2. Up in the Air
3. The Garden
4. Silent Light
5. Collapse
6. The Baader-Meinhof Complex
7. You, the Living
8. The Hurt Locker
9. Up
10. The Informant!

The Best Films of 2008

1. Gomorrah
2. Che
3. Revolutionary Road
4. Synechdoche, New York
5. Chop Shop
6. 4 Months, 3 Weeks, and 2 Days
7. Dear Zachary: A Letter to a Son About His Father
8. Alexandra
9. Battle for Haditha
10. Shotgun Stories

The Best Films of 2007

1. There Will Be Blood
2. Syndromes and a Century
3. No End in Sight
4. Before the Devil Knows You’re Dead
5. The Diving Bell and the Butterfly
6. The Lives of Others
7. No Country for Old Men
8. Black Snake Moan
9. Munyurangabo
10. Atonement

The Best Films of 2006

1. Children of Men
2. When the Levees Broke: A Requiem in Four Acts
3. The Departed
4. The Death of Mr. Lazarescu
5. Letters from Iwo Jima
6. Army of Shadows
7. A Scanner Darkly
8. Brick
9. United 93
10. L’Enfant

The Best Films of 2005

1. No Direction Home: Bob Dylan
2. The New World
3. 49 Up
4. Syriana
5. Regular Lovers
6. Munich
7. Three Times
8. Downfall
9. Nobody Knows
10. Tropical Malady

The Best Films of 2004

1. Star Spangled to Death
2. The Return
3. Light is Calling
4. Million Dollar Baby
5. Fahrenheit 9/11
6. Eternal Sunshine of the Spotless Mind
7. Closer
8. Spartan
9. The Aviator
10. Kill Bill: Volume II

The Best Films of 2003

1. Le Fils
2. Lost in Translation
3. Ripley’s Game
4. City of God
5. Kill Bill: Volume 1
6. An Injury to One
7. Gerry
8. Saraband
9. The Man on the Train
10. Lilya-4-Ever

The Best Films of 2002

1. Devils on the Doorstep
2. Adaptation
3. Talk to Her
4. Bowling for Columbine
5. Spirited Away
6. Gangs of New York
7. Igby Goes Down
8. Far from Heaven
9. Moonlight Mile
10. Russian Ark

The Best Films of 2001

1. In the Mood for Love
2. Domestic Violence
3. Waking Life
4. Mulholland Drive
5. In the Bedroom
6. Werckmeister Harmonies
7. The Princess and the Warrior
8. The Royal Tenenbaums
9. What Time Is It There?
10. Memento

The Best Films of 2000

1. Songs from the Second Floor
2. High Fidelity
3. George Washington
4. Yi Yi: A One and a Two
5. Wonder Boys
6. Almost Famous
7. The Heart of the World
8. Traffic
9. You Can Count On Me
10. Crouching Tiger, Hidden Dragon

The Best Films of 1999

1. Magnolia
2. Being John Malkovich
3. Three Kings
4. Rosetta
5. Fight Club
6. Ratcatcher
7. Bringing Out the Dead
8. Cabaret Balkan
9. Topsy-Turvy
10. The Talented Mr. Ripley

The Best Films of 1998

1. Mother and Son
2. The Thin Red Line
3. Rushmore
4. Historie(s) du Cinema
5. Dark City
6. Your Friends & Neighbors
7. He Got Game
8. Out of Sight
9. The Celebration
10. After Life

The Best Films of 1997

1. Good Will Hunting
2. Jackie Brown
3. Public Housing
4. L.A. Confidential
5. Boogie Nights
6. In the Company of Men
7. The Ice Storm
8. The Promise
9. Fast, Cheap, and Out of Control
10. Irma Vep

The Best Films of 1996

1. Fargo
2. The Georgetown Loop
3. The People Vs. Larry Flynt
4. Breaking the Waves
5. Secrets and Lies
6. Hamlet
7. Land and Freedom
8. A Moment of Innocence
9. Paradise Lost: The Child Murders at Robin Hood Hills
10. Beautiful Girls

The Best Films of 1995

1. Heat
2. Se7en
3. Leaving Las Vegas
4. Dead Man Walking
5. La Haine
6. Good Men, Good Women
7. Casino
8. Nixon
9. Toy Story
10. Before the Rain

The Best Films of 1994

1. Pulp Fiction
2. Fresh
3. Hoop Dreams
4. The Blue Kite
5. Through the Olive Trees
6. The Shawshank Redemption
7. Rouge
8. Chungking Express
9. Ed Wood
10. Guelwaar

The Best Films of 1993

1. A Brighter Summer Day
2. Baraka
3. Menace II Society
4. Naked
5. Carlito’s Way
6. Dazed and Confused
7. Schindler’s List
8. Fearless
9. Farewell, My Concubine
10. The Age of Innocence

The Best Films of 1992

1. Malcolm X
2. Europa
3. Unforgiven
4. Glengarry Glen Ross
5. Lessons of Darkness
6. Out of Life
7. The Crying Game
8. The Match Factory Girl
9. The Ear
10. Reservoir Dogs

The Best Films of 1991

1. JFK (Director’s Cut)
2. The Double Life of Veronique
3. 35 Up
4. City of Hope
5. Boyz N the Hood
6. Life, and Nothing More…
7. Raise the Red Lantern
8. La Belle Noiseuse
9. Homicide
10. Side/Walk/Shuttle

The Best Films of 1990

1. GoodFellas
2. Isla das Flores
3. Close-Up
4. American Dream
5. Miller’s Crossing
6. Monsieur Hire
7. Reversal of Fortune
8. Interrogation
9. The Grifters
10. Santa Sangre

The Best Films of 1989

1. Do the Right Thing
2. Near Death
3. Drugstore Cowboy
4. sex, lies, and videotape
5. Crimes and Misdemeanors
6. Chameleon Street
7. Letters from a Dead Man
8. Born on the Fourth of July
9. Elephant
10. Roger & Me

The Best Films of 1988

1. The Decalogue
2. Talk Radio
3. Wings of Desire
4. Grave of The Fireflies
5. The Horse Thief
6. Hotel Terminus: The Life and Times of Klaus Barbie
7. The Last Temptation of Christ
8. Another Woman
9. The Unbearable Lightness of Being
10. Salaam Bombay!

The Best Films of 1987

1. Yeelen
2. The Emperor’s Naked Army Marches On
3. Mix-Up
4. River’s Edge
5. Au Revoir, Les Enfants
6. House of Games
7. Broadcast News
8. Matewan
9. Missile
10. The Last Emperor

The Best Films of 1986

1. The Sacrifice
2. A Time to Live and a Time to Die
3. Hannah and Her Sisters
4. Sid & Nancy
5. Platoon
6. The Green Ray
7. Sherman’s March
8. Adjustment and Work
9. ’Round Midnight
10. Vagabond

The Best Films of 1985

1. Streetwise
2. 28 Up
3. Shoah
4. Come and See
5. Mishima: A Life in Four Chapters
6. Grim
7. The Falcon and the Snowman
8. After Hours
9. Blood Simple
10. Ran

The Best Films of 1984

1. Paris, Texas
2. Love Streams
3. Once Upon a Time in America
4. Amadeus
5. Stop Making Sense
6. After the Rehearsal
7. The Ballad of Narayama
8. The Killing Fields
9. Stranger than Paradise
10. This is Spinal Tap & Secret Honor (tie)

The Best Films of 1983

1. Fanny and Alexander
2. Koyaanisqatsi
3. The Right Stuff
4. El Sur
5. The Traveling Players
6. Nostalghia
7. El Norte
8. Pauline at the Beach
9. Terms of Endearment
10. Testament

The Best Films of 1982

1. Diva
2. Gandhi
3. Fitzcarraldo & Burden of Dreams (tie)
4. Das Boot
5. Francisca
6. Mephisto
7. Thunder
8. Sophie’s Choice
9. Moonlighting
10. Cecilia

The Best Films of 1981

1. Pixote
2. Modern Romance
3. Blow Out
4. Raiders of the Lost Ark
5. My Dinner with Andre
6. Thief
7. Body Heat
8. The Aviator’s Wife
9. Coup de Torchon
10. Possession

The Best Films of 1980

1. Raging Bull
2. Gates of Heaven
3. Mon Oncle d’Amerique
4. Best Boy
5. The Color of Pomegranates
6. Our Hitler: A Film from Germany
7. Ordinary People
8. Kagemusha
9. Melvin and Howard
10. The Hypothesis of the Stolen Painting

The Best Films of 1979

1. Apocalypse Now
2. Manhattan
3. Bush Mama
4. Stalker
5. Being There
6. The Muppet Movie
7. Vengeance is Mine
8. Alien
9. The Onion Field
10. Real Life

The Best Films of 1978

1. Days of Heaven
2. Killer of Sheep
3. The Ascent
4. Blue Collar
5. The Whole Shootin’ Match
6. The Tree of Wooden Clogs
7. Autumn Sonata
8. An Unmarried Woman
9. Dossier 51
10. Dawn of the Dead

The Best Films of 1977

1. Aguirre: The Wrath of God
2. Stroszek
3. Three Women
4. Alice in the Cities
5. Annie Hall
6. That Obscure Object of Desire
7. Eraserhead
8. Opening Night
9. News from Home
10. Dersu Uzala

The Best Films of 1976

1. Taxi Driver
2. Harlan County, USA
3. Kings of the Road
4. Jeanne Dielman, 23 Quai du Commerce, 1080 Bruxelles
5. Network
6. Jonah Who Will Be 25 in the Year 2000
7. Picnic at Hanging Rock
8. Small Change
9. The Girl Chewing Gum
10. All the President’s Men

The Best Films of 1975

1. Welfare
2. Barry Lyndon
3. Nashville
4. Dog Day Afternoon
5. Mirror
6. The Phantom of Liberty
7. The Enigma of Kaspar Hauer
8. Jaws
9. Grey Gardens
10. Monty Python and the Holy Grail

The Best Films of 1974

1. Chinatown
2. Scenes from a Marriage
3. Day for Night
4. Lucia
5. Hearts and Minds
6. The Godfather II
7. Marketa Lazarova
8. The Conversation
9. A Woman Under the Influence
10. Amarcord

The Best Films of 1973

1. Juvenile Court
2. Last Tango in Paris
3. Playtime
4. Mean Streets
5. Badlands
6. Touki Bouki
7. The Mother and the Whore
8. The Sting
9. State of Siege
10. The Exorcist

The Best Films of 1972

1. The Discreet Charm of the Bourgeoisie
2. The Godfather
3. Cries and Whispers
4. The Sorrow and the Pity
5. Fat City
6. Solaris
7. Winter Soldier
8. Chloe in the Afternoon
9. Essene
10. The Emigrants

The Best Films of 1971

1. The Last Picture Show
2. Punishment Park
3. Basic Training
4. McCabe & Mrs. Miller
5. Claire’s Knee
6. Death by Hanging
7. The Garden of the Finzi-Continis
8. Fata Morgana
9. Love
10. The French Connection

The Best Films of 1970

1. Hospital
2. Ice
3. Woodstock: 3 Days of Peace and Music
4. The Conformist
5. Finally Got the News (not in Mubi database)
6. My Night at Maud’s
7. Law and Order
8. Le Cercle Rouge
9. Five Easy Pieces
10. Le Boucher

The Best Films of 1969

1. Medium Cool
2. Andrei Rublev
3. Butch Cassidy & The Sundance Kid
4. Z
5. Salesman
6. If…
7. The Wild Bunch
8. Kes
9. Last Summer
10. Adalen 31

The Best Films of 1968

1. 2001: A Space Odyssey
2. The Red and the White
3. The Hour of the Furnaces
4. Memories of Underdevelopment
5. High School
6. Wavelength
7. Faces
8. In the Year of the Pig & Ordinary Fascism (tie)
9. Shame
10. Once Upon a Time in the West

The Best Films of 1967

1. The Battle of Algiers
2. Weekend
3. Bonnie & Clyde
4. Le Samourai
5. La Guerre est Finie
6. Titticut Follies
7. Le Petit Soldat & La Chinoise
8. The Graduate
9. In Cold Blood
10. Belle de Jour

The Best Films of 1966

1. Persona
2. The Good, the Bad, and the Ugly
3. The Round-Up
4. Au Hasard Balthazar
5. The War Game
6. Who’s Afraid of Virginia Woolf?
7. Blow-Up
8. Red Beard
9. Seconds
10. The Shop on Main Street

The Best Films of 1965

1. Pierrot Le Fou
2. The Gospel According to St. Matthew
3. The Fifth Horseman Is Fear
4. Repulsion
5. The Saragossa Manuscript
6. The Big City
7. The Hill
8. The Golden Thread
9. Quixote
10. Juliet of the Spirits

The Best Films of 1964

1. Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb
2. A Woman in the Dunes
3. The Silence
4. I Am Cuba
5. An Autumn Afternoon
6. 21-87
7. A Hard Day’s Night
8. The Train & Fail-Safe (tie)
9. Diamonds of the Night
10. A Band of Outsiders

The Best Films of 1963

1. 8 1/2
2. Hud
3. Winter Light
4. The Leopard
5. The House is Black
6. High and Low
7. Vidas Secas
8. The Trial
9. Contempt
10. The Great Escape

The Best Films of 1962

1. Lawrence of Arabia
2. The Exterminating Angel
3. My Life to Live
4. Ivan’s Childhood
5. Through a Glass Darkly
6. Jules et Jim
7. Good Morning
8. The Manchurian Candidate
9. The Bad Sleep Well
10. Long Day’s Journey Into Night

The Best Films of 1961

1. Last Year at Marienbad
2. Ashes and Diamonds
3. Yojimbo
4. Viridiana
5. Throne of Blood
6. The Hustler
7. Cleo from 5 to 7
8. When a Woman Ascends the Stairs
9. Two Women
10. Elevator to the Gallows

The Best Films of 1960

1. The World of Apu
2. The Apartment
3. La Dolce Vita
4. Breathless
5. Hiroshima, Mon Amour
6. Shoot the Piano Player
7. The Cloud-Capped Star
8. L’Avventura
9. Peeping Tom & Psycho
10. Purple Noon

The Best Films of 1959

1. Le Chant du Styrene
2. The 400 Blows
3. Aparajito
4. Pickpocket
5. Black Orpheus
6. Touchez Pas au Grisbi
7. Shadows
8. Rio Bravo
9. North by Northwest
10. Ivan the Terrible Part II

The Best Films of 1958

1. Vertigo
2. Pather Panchali
3. The Music Room
4. Touch of Evil
5. Some Came Running
6. Mon Oncle
7. The Hidden Fortress
8. Big Deal on Madonna Street
9. Murder by Contract
10. Le Notte Bianchi

The Best Films of 1957

1. Wild Strawberries
2. The Bridge on the River Kwai
3. Nights of Cabiria
4. Paths of Glory
5. The Seventh Seal
6. Kanal
7. Sweet Smell of Success
8. 12 Angry Men
9. The Cranes Are Flying
10. A Face in the Crowd

The Best Films of 1956

1. Seven Samurai
2. Ordet
3. A Man Escaped
4. All the World’s Memory
5. The Searchers
6. I Vitelloni
7. The Red Balloon
8. Street of Shame
9. Lola Montes
10. The Killing

The Best Films of 1955

1. Sansho the Bailiff
2. Night and Fog
3. Night of the Hunter
4. Rififi
5. Bob Le Flambeur
6. Bad Day at Black Rock
7. Voyage to Italy
8. Il Bidone
9. Diabolique
10. Rebel Without a Cause & East of Eden (tie)

The Best Films of 1954

1. On The Waterfront
2. Ugetsu
3. Le Plaisir
4. Rear Window
5. Ascent to Heaven
6. La Ronde
7. The Caine Mutiny
8. Crime Wave
9. Dial M for Murder
10. La Strada

The Best Films of 1953

1. Tokyo Story
2. Daybreak Express
3. The Earrings of Madame de…
4. Pickup on South Street
5. Wages of Fear
6. The Big Heat
7. Monsieur Hulot’s Holiday
8. Little Fugitive
9. The Brute
10. Summer with Monika

The Best Films of 1952

1. Ikiru
2. Umberto D
3. Singin’ in the Rain
4. Los Olvidados
5. The Tragedy of Othello: The Moor of Venice
6. Forbidden Games
7. The Bad and the Beautiful
8. Angel Face
9. High Noon
10. The Narrow Margin

The Best Films of 1951

1. Diary of a Country Priest
2. Strangers on a Train
3. The River
4. Early Summer
5. The Browning Version
6. Miracle in Milan
7. The African Queen
8. Ace in the Hole
9. A Streetcar Named Desire
10. The Lavender Hill Mob

The Best Films of 1950

1. Sunset Boulevard
2. Night and the City
3. Orpheus
4. Rashomon
5. In a Lonely Place
6. Stromboli
7. The Asphalt Jungle
8. Stars in My Crown
9. All About Eve
10. The Flowers of St. Francis

The Best Films of 1949

1. The Third Man
2. Stray Dog
3. Bicycle Thieves
4. Late Spring
5. Kind Hearts and Coronets
6. Germany Year Zero
7. White Heat
8. All the King’s Men
9. The Set-Up
10. Gun Crazy

The Best Films of 1948

1. The Red Shoes
2. The Treasure of the Sierra Madre
3. Children of the Beehive
4. The Naked City
5. Quai des Orfevres
6. They Live By Night
7. Rope
8. Red River
9. Letter from an Unknown Woman
10. Key Largo

The Best Films of 1947

1. Out of the Past
2. Black Narcissus
3. Odd Man Out
4. Monsieur Verdoux
5. The Lady from Shanghai
6. The Ball at Anjo House
7. Brute Force
8. Brighton Rock
9. Record of A Tenement Gentleman
10. Body and Soul

The Best Films of 1946

1. Notorious
2. A Matter of Life and Death
3. The Best Years of Our Lives
4. Beauty and the Beast
5. My Darling Clementine
6. The Big Sleep
7. Gilda & The Stranger (tie)
8. Paisan
9. Great Expectations
10. It’s a Wonderful Life

The Best Films of 1945

1. Children of Paradise
2. Rome, Open City
3. Brief Encounter
4. Detour
5. Ivan The Terrible, Part I
6. The Lost Weekend
7. A Walk in the Sun
8. A Tree Grows in Brooklyn
9. Leave Her to Heaven
10. The Picture of Dorian Gray

The Best Films of 1944

1. Double Indemnity
2. Miracle of Morgan’s Creek
3. Lifeboat
4. To Have and Have Not
5. Ministry of Fear
6. Arsenic and Old Lace
7. Laura
8. Murder, My Sweet
9. Gaslight
10. Meet Me in St. Louis

The Best Films of 1943

1. Day of Wrath
2. The Life and Death of Colonel Blimp
3. Ossessione
4. Le Corbeau
5. The Ox-Bow Incident
6. Shadow of A Doubt
7. I Walked with a Zombie…
8. For Whom the Bell Tolls
9. The More the Merrier
10. Sahara

The Best Films of 1942

1. The Magnificent Ambersons
2. Casablanca
3. Aniki Bobo
4. Cat People
5. This Gun for Hire
6. The 47 Ronin Part II
7. By Night with Torch and Spear
8. There Was a Father
9. The Palm Beach Story
10. The Glass Key

The Best Films of 1941

1. Citizen Kane
2. The Maltese Falcon
3. Ball of Fire
4. The Lady Eve
5. Sullivan’s Travels
6. The 47 Ronin Part I
7. High Sierra
8. The Devil and Daniel Webster
9. How Green Was My Valley
10. Suspicion

The Best Films of 1940

1. The Grapes of Wrath
2. His Girl Friday
3. The Great Dictator
4. The Bank Dick
5. The Thief of Baghdad
6. The Philadelphia Story
7. Foreign Correspondent
8. Christmas in July
9. The Shop Around the Corner
10. Pinocchio & Fantasia

The Best Films of 1939

1. The Rules of the Game
2. Only Angels Have Wings
3. Daybreak
4. The Story of Late Chrysanthemums
5. Mr. Smith Goes to Washington
6. Earth (Tsuchi)
7. Stagecoach
8. Ninotchka
9. Of Mice and Men
10. Goodbye, Mr. Chips

The Best Films of 1938

1. Alexander Nevsky
2. Olympia
3. Port of Shadows
4. La Bete Humaine
5. Angels with Dirty Faces
6. The Adventures of Robin Hood
7. Bringing Up Baby
8. The Baker’s Wife
9. Jezebel
10. The Lady Vanishes

The Best Films of 1937

1. Grand Illusion
2. Make Way for Tomorrow
3. Humanity and Paper Balloons
4. Pepe Le Moko
5. Street Angel
6. The Spanish Earth
7. The Awful Truth
8. Dead End
9. Way Out West
10. The Dybbuk

The Best Films of 1936

1. The Only Son
2. Modern Times
3. A Day in the Country
4. The Crime of Monsieur Lange
5. Swing Time
6. Fury
7. Osaka Elegy
8. Dodsworth
9. My Man Godfrey
10. Sisters of the Gion

The Best Films of 1935

1. Triumph of the Will
2. The 39 Steps
3. Top Hat
4. Ruggles of Red Gap
5. Shipyard
6. An Inn in Tokyo
7. A Night at the Opera
8. Vibration of Granada
9. Mutiny on the Bounty
10. Housing Problems

The Best Films of 1934

1. L’Atalante
2. The Thin Man
3. Man of Aran
4. It Happened One Night
5. The Black Cat
6. Twentieth Century
7. It’s A Gift
8. A Story of Floating Weeds
9. Our Daily Bread
10. The Man Who Knew Too Much

The Best Films of 1933

1. Blood of a Poet
2. Land Without Bread
3. Duck Soup
4. Zero for Conduct
5. King Kong
6. The Testament of Dr. Mabuse
7. Design for Living
8. Passing Fancy
9. Sons of the Desert
10. The Invisible Man

The Best Films of 1932

1. I Am a Fugitive from a Chain Gang
2. Boudu Saved from Drowning
3. !Que Viva Mexico!
4. Trouble in Paradise
5. Freaks
6. Vampyr
7. I Was Born, But…
8. Scarface
9. Grand Hotel
10. Raid in St. Pauli

The Best Films of 1931

1. City Lights
2. Limite
3. M
4. A Nous la Liberte
5. Frankenstein
6. Kameradschaft
7. Le Million
8. The Public Enemy
9. Little Caesar
10. Dracula

The Best Films of 1930

1. Earth
2. L’Age d’Or
3. All Quiet on the Western Front
4. Borderline
5. People on Sunday
6. City Girl
7. Animal Crackers
8. Under the Roofs of Paris
9. Hell’s Angels
10. The Blue Angel

The Best Films of 1929

1. Man with a Movie Camera
2. Un Chien Andalou
3. Pandora’s Box
4. Diary of a Lost Girl
5. Arsenal
6. Blackmail
7. Old and New/The General Line
8. Hallelujah!
9. Queen Kelly
10. Skyscraper Symphony

The Best Films of 1928

1. The Passion of Joan of Arc
2. The Wind
3. The Crowd
4. Steamboat Bill Jr.
5. The Cameraman
6. October
7. Lonesome
8. The Seashell and the Clergyman
9. The Circus
10. The Docks of New York

The Best Films of 1927

1. Sunrise
2. Metropolis
3. Napoleon
4. Berlin: Symphony of a Great City
5. Hindle Wakes
6. Walking from Munich to Berlin
7. Invitation to the Voyage
8. Underworld
9. The Lodger
10. College

The Best Films of 1926

1. The General
2. Faust
3. A Page of Madness
4. The Adventures of Prince Achmed
5. Menilmontant
6. Emak-Bakia
7. A Sixth Part of the World
8. Nothing but Time
9. 3 Bad Men
10. For Heaven’s Sake

The Best Films of 1925

1. The Gold Rush
2. Battleship Potemkin
3. Strike!
4. Seven Chances
5. The Big Parade
6. Jeux de Refletes et de la Vitesse
7. Ben Hur: A Tale of the Christ
8. The Freshman
9. Master of the House
10. The Phantom of the Opera

The Best Films of 1924

1. Sherlock Jr.
2. Greed
3. The Great White Silence
4. Entr’acte
5. Ballet Mecanique
6. The Last Laugh
7. Paris Asleep
8. The Navigator
9. Cloud Phenomena of Maloja
10. The Fugitive Futurist

The Best Films of 1923

1. Haxan
2. The Smiling Madame Beudet
3. Safety Last!
4. Our Hospitality
5. The Ten Commandments
6. Go West (Len Powers – Not in Mubi database)
7. Hunchback of Notre Dame
8. The Nightingale’s Voice
9. The Balloonatic
10. Souls for Sale

The Best Films of 1922

1. Nanook of The North
2. Nosferatu
3. Dr. Mabuse
4. Cops
5. Foolish Wives
6. Pay Day
7. Robin Hood
8. My Wife’s Relations
9. Phantom
10. The Frogs Who Wanted a King

The Best Films of 1921

1. Sir Arne’s Treasure
2. The Kid
3. Destiny
4. Backstairs
5. Manhatta
6. Rhythmus 21
7. Hard Luck
8. The Wildcat
9. The Idle Class
10. Lichtspiel Opus I

The Best Films of 1920

1. The Cabinet of Dr. Caligari
2. South
3. Way Down East
4. The Golem
5. One Week

The Best Films of 1919

1. Broken Blossoms
2. J’Accuse!
3. Out of the Inkwell
4. A Day’s Pleasure
5. The Wicked Darling

The Best Films of 1918

1. The Outlaw and His Wife
2. Thomas Graal’s Best Child
3. A Dog’s Life

The Best Films of 1917

1. A Man There Was
2. The Butcher Boy
3. Easy Street

The Best Films of 1916

1. Intolerance
2. One A.M.
3. Police

The Best Films of 1915

1. The Vampires
2. Regeneration
3. The Golem

The Best Films of 1914

1. Cabiria
2. Gertie the Dinosaur
3. In the Land of the Head Hunters

The Best Films of 1913

1. Fantomas
2. The Student of Prague
3. Bout de Zan Steals an Elephant

The Best Films of 1912

1. The Musketeers of Pig Alley
2. The Cameraman’s Revenge
3. The Land Beyond the Sunset

The Best Films of 1911

1. Fighting Blood
2. The Lonedale Operator
3. Banks of the Nile

The Best Films of 1910

1. Frankenstein
2. The Unchanging Sea
3. The Balancing Bluebottle

The Best Film of 1909

1. Locataire Diabolique

The Best Film of 1908

1. Fantasmagorie

The Best Film of 1907

1. Ben Hur

The Best Film of 1906

1. San Fransisco

The Best Film of 1905

1. The Black Devil

The Best Film of 1904

1. Grand Display of Brock’s Fireworks at the Crystal Palace (not in Mubi database)

The Best Film of 1903

1. The Great Train Robbery

The Best Film of 1902

1. A Trip to the Moon

The Best Film of 1901

1. Fire!

The Best Film of 1900

1. Joan of Arc`;


let jumbledList = list.split('\n');
let formattedList = {};
let index = 1;
jumbledList.forEach((listItem) => {
  if (listItem[1] === '.') {
    let title = listItem.slice(3, listItem.length);
    formattedList[index] = title;
    index++
  }
})

fs.writeFile('data.json', JSON.stringify(formattedList), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

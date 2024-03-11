function generateSongTitles() {
    var userInput = prompt("Masukkan angka antara 1 dan 100: ");
    var numSongs = parseInt(userInput);

    // Memastikan input pengguna adalah angka dan berada dalam rentang yang valid
    if (!isNaN(numSongs) && numSongs >= 1 && numSongs <= 100) {
        console.log("Berikut adalah " + numSongs + " judul lagu:");

        // Array judul lagu
        var songTitles = [
            "Shape of You - Ed Sheeran",
            "Bohemian Rhapsody - Queen",
            "Stairway to Heaven - Led Zeppelin",
            "Hotel California - Eagles",
            "Imagine - John Lennon",
            "Smells Like Teen Spirit - Nirvana",
            "Hey Jude - The Beatles",
            "Sweet Child o' Mine - Guns N' Roses",
            "Wonderwall - Oasis",
            "Billie Jean - Michael Jackson",
            "Like a Rolling Stone - Bob Dylan",
            "Piano Man - Billy Joel",
            "Purple Haze - Jimi Hendrix",
            "Let It Be - The Beatles",
            "Yesterday - The Beatles",
            "The Sound of Silence - Simon & Garfunkel",
            "Hallelujah - Leonard Cohen",
            "Thriller - Michael Jackson",
            "Boogie Wonderland - Earth, Wind & Fire",
            "Hotel California - Eagles",
            "I Will Always Love You - Whitney Houston",
            "My Heart Will Go On - Celine Dion",
            "Don't Stop Believin' - Journey",
            "Every Breath You Take - The Police",
            "Billie Jean - Michael Jackson",
            "Somebody to Love - Queen",
            "With or Without You - U2",
            "I Want to Hold Your Hand - The Beatles",
            "Wonderful Tonight - Eric Clapton",
            "Let It Be - The Beatles"
            // Anda bisa menambahkan lebih banyak judul lagu di sini
        ];

        // Menampilkan judul lagu sebanyak yang diminta pengguna secara acak
        for (var i = 0; i < numSongs; i++) {
            var randomIndex = Math.floor(Math.random() * songTitles.length);
            console.log((i + 1) + ". " + songTitles[randomIndex]);
        }
    } else {
        console.log("Input tidak valid. Harap masukkan angka antara 1 dan 100.");
    }
}

// Menjalankan fungsi
generateSongTitles();

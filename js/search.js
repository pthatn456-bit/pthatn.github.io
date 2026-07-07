function normalize(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}

// khoảng cách Levenshtein

function levenshtein(a, b) {

    const matrix = [];

    for (let i = 0; i <= b.length; i++)
        matrix[i] = [i];

    for (let j = 0; j <= a.length; j++)
        matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {

        for (let j = 1; j <= a.length; j++) {

            if (b.charAt(i - 1) === a.charAt(j - 1)) {

                matrix[i][j] = matrix[i - 1][j - 1];

            } else {

                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + 1
                );

            }

        }

    }

    return matrix[b.length][a.length];

}

function searchPage() {

    const input = normalize(
        document.getElementById("searchInput").value
    );

    let best = null;

    let score = 999;

    searchData.forEach(page => {

        page.keywords.forEach(word => {

            const distance = levenshtein(
                input,
                normalize(word)
            );

            if (distance < score) {

                score = distance;
                best = page;

            }

        });

    });

    if (best && score <= 2) {

        window.location.href = best.url;

    } else {

        alert("Không tìm thấy.");

    }

}
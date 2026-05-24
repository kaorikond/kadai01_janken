$(".choice-btn").on("click", function () {
    // どのボタンを押したか判定（high, mid, low）
    var energy = $(this).attr("data-energy");
    var menu = "";
    var comment = "";

    if (energy === "high") {
        comment = "素晴らしい！気力十分ですね。";
        // 頑張れる時のメニューリスト
        var menus = ["ハンバーグ", "餃子", "唐揚げ", "具だくさんカレー"];
        menu = menus[Math.floor(Math.random() * menus.length)];
        $("#menu-result").css("color", "#e74c3c"); // 赤系

    } else if (energy === "mid") {
        comment = "ほどほどに頑張るあなたへ。";
        // ぼちぼちの時のメニューリスト
        var menus = ["鍋", "生姜焼き", "親子丼", "パスタ"];
        menu = menus[Math.floor(Math.random() * menus.length)];
        $("#menu-result").css("color", "#f39c12"); // オレンジ系

    } else if (energy === "low") {
        comment = "今日もお疲れ様。無理は禁物です！";
        // 無理な時のメニューリスト
        var menus = ["冷凍うどん", "納豆ご飯", "コンビニ弁当", "UberEats"];
        menu = menus[Math.floor(Math.random() * menus.length)];
        $("#menu-result").css("color", "#2980b9"); // 青系
    }

    // 結果を表示
    $("#answer-text").text(comment);
    $("#menu-result").html("おすすめは...<br><span>" + menu + "</span>");
});

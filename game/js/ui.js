var UI = function(world) {
	var ui = game.add.group();
	ui.fixedToCamera = true;
	ui.cameraOffset.x = 10;
	ui.cameraOffset.y = 10;


	var head = game.add.sprite(0,3, "atlas", "ui_head", ui);

	var health = [];
	var x = 0;
	var y = 0;
	for (var i = 0; i < 10; i++) {
		var h = game.add.sprite(20 + x * 15, y * 14, "atlas", "health_full", ui);
		x++;
		if (x >= 5) {
			y++;
			x = 0;
		}
		health.push(h);
	};

	var visible = 0;

	ui.updateHealth = function() {
		visible = 0;
		for (var i = 1; i <= health.length; i++) {
			var h = health[i-1];
			if (i*2 <= world.player.maxHP) {
				h.visible = true;
				visible++;
				if (world.player.hp >= i*2) h.frameName = "health_full";
				else if (world.player.hp == i*2 - 1) h.frameName = "health_half";
				else h.frameName = "health_empty";
			} else {
				h.visible = false;
			}
			
		};

		head.y = visible > health.length / 2 ? 3 : -3;

	}
	return ui;
}
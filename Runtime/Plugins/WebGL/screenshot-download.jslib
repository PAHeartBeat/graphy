var ScreenShotWebGL = {
	downloadImageJS: function (dataPtr, length, filenamePtr) {
		const toNumber = (v) => (typeof v === "bigint" ? Number(v) : v);
		var bytes = new Uint8Array(
			Module.HEAPU8.buffer,
			toNumber(dataPtr),
			toNumber(length)
		);
		var blob = new Blob([bytes], { type: "image/png" });

		var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = UTF8ToString(filenamePtr);
		a.click();
	},
};

mergeInto(LibraryManager.library, ScreenShotWebGL);

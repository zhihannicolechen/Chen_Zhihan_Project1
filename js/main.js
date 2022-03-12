(() => {
    let soundPieces = document.querySelectorAll(".musicPieces img"),
        dropZone = document.querySelectorAll(".dropzone");

    function dragStarted(event) {
        console.log('started dragging a piece');
        event.dataTransfer.setData('currentItem', event.target.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('dragged over me');
    }

    function allowDrop(event) {
		event.preventDefault();
		console.log('dropped on me');
		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);
		this.appendChild(document.querySelector(`#${droppedEl}`));
	}

    function playAudio(event) {
        let currentTrack = `audio/${this.dataset.trackref}`
    }
    
    soundPieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));



    dropZone.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop, playAudio);
	});

    //dropZone.addEventListener("dragover", allowDragOver, "drop", allowDrop)

})();

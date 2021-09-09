

const scroller = scrollama();

		scroller
			.setup({
				step: ".step",
				progress: true
			})
			.onStepEnter((response) => {
				console.log(response);

				document.getElementById(response.element.dataset.target).setAttribute(response.element.dataset.attribute, response.element.dataset.value);
			})
			.onStepExit((response) => {
				reset(response);
			})
			.onStepProgress((response) => {
				if(response.element.dataset.type == 'progressive'){
					console.log(response);
					document.getElementById(response.element.dataset.target).setAttribute(response.element.dataset.attribute, response.progress * 100);
				}
			});

		window.addEventListener("resize", scroller.resize);

		function reset(response) {
			if(response.element.dataset.attribute == 'r' && response.direction == 'up'){
				document.getElementById('circObj').setAttribute('r', 100);
			}
			if(response.element.dataset.type == 'progressive' && response.direction == 'up'){
				document.getElementById('circObj').setAttribute('r', 50);
			}
			if(response.element.dataset.attribute == 'opacity' && response.direction == 'up'){
				document.getElementById('circObj').setAttribute('opacity', 1);
			}
		}

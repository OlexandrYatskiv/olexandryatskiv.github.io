let seasons = ['Зима', 'Весна', 'Літо', 'Осінь'];

        function InputNumMonth() {
            let num = prompt('Введіть номер місяця:');

            if (num == 1 || num == 2 || num == 12) {
                alert("Пора року: " + seasons[0]);
                
            }
            if (num >= 3 || num == 4 || num == 5) {
                alert("Пора року: " + seasons[1]);
                
            }
            if (num == 6 || num == 7 || num == 8) {
                alert("Пора року: " + seasons[2]);
                
            }
            if (num == 9 || num == 10 || num == 11) {
                alert("Пора року: " + seasons[3]);
                
            }
        }
        InputNumMonth()
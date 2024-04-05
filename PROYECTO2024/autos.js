    function showModelos() {
        var marca = document.getElementById("marca").value;
        var modelos = document.getElementById("modelo");
        modelos.innerHTML = ""; // Limpiar opciones anteriores
        if (marca === "Toyota") {
            // Simulación de llenado dinámico de modelos para Toyota
            var modelosToyota = ["Selecciona un modelo","Corolla", "Hilux", "Supra", "Tacoma", "Tundra"];
            modelosToyota.forEach(function(modelo) {
                var option = document.createElement("option");
                option.text = modelo;
                modelos.add(option);
            });
        } else if (marca === "Honda") {
            // Simulación de llenado dinámico de modelos para Honda
            var modelosHonda = ["Selecciona un modelo","Civic", "Accord", "CR-V"];
            modelosHonda.forEach(function(modelo) {
                var option = document.createElement("option");
                option.text = modelo;
                modelos.add(option);
            });
        }
        document.getElementById("modelos").style.display = "block";
    }

    function showYears() {
        var modelo = document.getElementById("modelo").value;
        var years = document.getElementById("year");
        years.innerHTML = ""; // Limpiar opciones anteriores
        if (modelo === "Corolla") {
            // Simulación de llenado dinámico de años para el modelo Corolla
            var yearsCorolla = ["Selecciona un año","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966"];
            yearsCorolla.forEach(function(year) {
                var option = document.createElement("option");
                option.text = year;
                years.add(option);
            });
        } else if (modelo === "Hilux") {
            // Simulación de llenado dinámico de años para el modelo Camry
            var yearsCamry = ["Selecciona un año","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968"];
            yearsCamry.forEach(function(year) {
                var option = document.createElement("option");
                option.text = year;
                years.add(option);
            });
        } else if (modelo === "RAV4") {
            // Simulación de llenado dinámico de años para el modelo RAV4
            var yearsRAV4 = ["Selecciona un año","2021", "2020", "2019"];
            yearsRAV4.forEach(function(year) {
                var option = document.createElement("option");
                option.text = year;
                years.add(option);
            });
        } else if (modelo === "Civic") {
            // Simulación de llenado dinámico de años para el modelo RAV4
            var yearsRAV4 = ["Selecciona un año","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972"];
            yearsRAV4.forEach(function(year) {
                var option = document.createElement("option");
                option.text = year;
                years.add(option);
            });
        } else if (modelo === "Accord") {
            // Simulación de llenado dinámico de años para el modelo RAV4
            var yearsRAV4 = ["Selecciona un año","2021", "2020", "2019"];
            yearsRAV4.forEach(function(year) {
                var option = document.createElement("option");
                option.text = year;
                years.add(option);
            });
        } 

        document.getElementById("years").style.display = "block";
    }

    function showInfo() {
        var info = document.getElementById("info");
        var marca = document.getElementById("marca").value;
        var modelo = document.getElementById("modelo").value;
        var year = document.getElementById("year").value;

        // Simulación de información del auto seleccionado
        var tipoMotor, cambiosAceite;


/* INFORMACIÓN TOYOTA COROLLA */

    if (modelo === "Corolla" && year === "2024") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2023") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2022") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2021") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2020") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2019") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2018") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2017") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2016") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2015") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2014") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2013") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2012") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2011") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2010") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2009") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2008") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2007") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2006") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2005") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2004") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2003") {
            tipoMotor = "Motor 1ZZ-FE de 1.8 litros. El 1ZZ-FE tiene una capacidad de 1.8 litros y la designación FE que nuevamente sugiere un enfoque en la eficiencia de combustible. Este motor ha sido utilizado en una variedad de vehículos Toyota y es conocido por su fiabilidad y durabilidad.";
            hp = "120hp";
            cc = "1794cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2002") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2001") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "2000") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1999") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1998") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1997") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1996") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1995") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1994") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1993") {
            tipoMotor = "Motor 7A-FE de 1.8 litros. Este motor tiene una capacidad ligeramente mayor de 1.8 litros y pertenece a la serie A de Toyota. La designación FE podría indicar un enfoque en la eficiencia, al igual que el motor 4A-FE.";
            hp = "115hp";
            cc = "1762cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1992") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1991") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1990") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1989") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1988") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1987") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1986") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1985") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1984") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1983") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1982") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1981") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1980") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1979") {
            tipoMotor = "Motor 4A-FE de 1.6 litros. También perteneciente a la serie A de Toyota, este motor tiene una capacidad de 1.6 litros y la designación FE que generalmente indica un enfoque en la eficiencia de combustible. Los motores 4A-FE suelen ser más orientados hacia la economía de combustible y la durabilidad.";
            hp = "100hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1978") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. Este es un motor de la serie A de Toyota, con una capacidad de 1.6 litros y la designación GE que sugiere que es una versión deportiva y de alto rendimiento. Los motores 4A-GE son conocidos por su respuesta ágil y potencia en comparación con otros motores de la misma categoría.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1977") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. Este es un motor de la serie A de Toyota, con una capacidad de 1.6 litros y la designación GE que sugiere que es una versión deportiva y de alto rendimiento. Los motores 4A-GE son conocidos por su respuesta ágil y potencia en comparación con otros motores de la misma categoría.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1976") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. Este es un motor de la serie A de Toyota, con una capacidad de 1.6 litros y la designación GE que sugiere que es una versión deportiva y de alto rendimiento. Los motores 4A-GE son conocidos por su respuesta ágil y potencia en comparación con otros motores de la misma categoría.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1975") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. Este es un motor de la serie A de Toyota, con una capacidad de 1.6 litros y la designación GE que sugiere que es una versión deportiva y de alto rendimiento. Los motores 4A-GE son conocidos por su respuesta ágil y potencia en comparación con otros motores de la misma categoría.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1974") {
            tipoMotor = "Motor 4A-GE de 1.6 litros. Este es un motor de la serie A de Toyota, con una capacidad de 1.6 litros y la designación GE que sugiere que es una versión deportiva y de alto rendimiento. Los motores 4A-GE son conocidos por su respuesta ágil y potencia en comparación con otros motores de la misma categoría.";
            hp = "115hp";
            cc = "1587cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1973") {
            tipoMotor = "Motor 2T-C de 1.6 litros.";
            hp = "75hp";
            cc = "1588cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1972") {
            tipoMotor = "Motor 2T-C de 1.6 litros.";
            hp = "75hp";
            cc = "1588cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1971") {
            tipoMotor = "Motor 2T-C de 1.6 litros.";
            hp = "75hp";
            cc = "1588cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1970") {
            tipoMotor = "Motor 2T-C de 1.6 litros.";
            hp = "75hp";
            cc = "1588cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1969") {
            tipoMotor = "Motor 2T de 1.0 litros. Este es un motor de dos tiempos con una capacidad de 1.0 litros. Los motores de dos tiempos son conocidos por su simplicidad y alta potencia en relación con su tamaño, pero también tienden a ser menos eficientes en términos de consumo de combustible y emisiones.";
            hp = "45hp";
            cc = "993cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1968") {
            tipoMotor = "Motor 2T de 1.0 litros. Este es un motor de dos tiempos con una capacidad de 1.0 litros. Los motores de dos tiempos son conocidos por su simplicidad y alta potencia en relación con su tamaño, pero también tienden a ser menos eficientes en términos de consumo de combustible y emisiones.";
            hp = "45hp";
            cc = "993cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1967") {
            tipoMotor = "Motor 2T de 1.0 litros. Este es un motor de dos tiempos con una capacidad de 1.0 litros. Los motores de dos tiempos son conocidos por su simplicidad y alta potencia en relación con su tamaño, pero también tienden a ser menos eficientes en términos de consumo de combustible y emisiones.";
            hp = "45hp";
            cc = "993cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Corolla" && year === "1966") {
            tipoMotor = "Motor 2T de 1.0 litros. Este es un motor de dos tiempos con una capacidad de 1.0 litros. Los motores de dos tiempos son conocidos por su simplicidad y alta potencia en relación con su tamaño, pero también tienden a ser menos eficientes en términos de consumo de combustible y emisiones.";
            hp = "45hp";
            cc = "993cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } 
        
/* INFORMACIÓN TOYOTA HILUX */

        else if (modelo === "Hilux" && year === "2024") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2023") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2022") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2021") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2020") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2019") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2018") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2017") {
            tipoMotor = "Motor 2GD-FTV 2.4 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia. Contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor. Con su reputación de confiabilidad y rendimiento robusto, el motor 2GD-FTV es una opción popular en el segmento diésel.";
            hp = "180hp";
            cc = "2393cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2016") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2015") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2014") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2013") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2012") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2011") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2010") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2009") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2008") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2007") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2006") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2005") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2004") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2003") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2002") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2001") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "2000") {
            tipoMotor = "Motor 2KD-FTV 2.5 litros. Este motor es conocido por su eficiencia en el consumo de combustible, durabilidad y potencia, contiene la presencia de tecnología de inyección directa de combustible y turbocompresor para mejorar el rendimiento del motor.";
            hp = "150hp";
            cc = "2494cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Diesel";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1999") {
            tipoMotor = "Motor 3RZ-FE de 2.7 litros. Este motor es conocido por su eficiencia, fiabilidad y rendimiento equilibrado, está equipado con inyección electrónica de combustible, lo que ayuda a mejorar la economía de combustible y reducir las emisiones.";
            hp = "160hp";
            cc = "2694cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1998") {
            tipoMotor = "Motor 3RZ-FE de 2.7 litros. Este motor es conocido por su eficiencia, fiabilidad y rendimiento equilibrado, está equipado con inyección electrónica de combustible, lo que ayuda a mejorar la economía de combustible y reducir las emisiones.";
            hp = "160hp";
            cc = "2694cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1997") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1996") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1995") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1994") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1993") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1992") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1991") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1990") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1989") {
            tipoMotor = "Motor 22R-E de 2.4 litros. El motor 22R-E de 2.4 litros es una versión mejorada del motor 22R de Toyota, con la adición de la inyección electrónica de combustible. La inyección electrónica de combustible ayuda a mejorar el rendimiento del motor al proporcionar una mezcla precisa de aire y combustible, lo que resulta en una mejor economía de combustible y menores emisiones.";
            hp = "115hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1988") {
            tipoMotor = "Motor 22R de 2.4 litros. Este motor es conocido por su durabilidad legendaria, fiabilidad y facilidad de mantenimiento. El 22R ha sido ampliamente utilizado en una variedad de vehículos Toyota, tanto de carga como de pasajeros, debido a su robustez y capacidad para soportar condiciones de manejo exigentes. Con una reputación de larga vida útil y un buen rendimiento, el motor 22R es muy apreciado por los entusiastas y propietarios de vehículos Toyota.";
            hp = "105hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1987") {
            tipoMotor = "Motor 22R de 2.4 litros. Este motor es conocido por su durabilidad legendaria, fiabilidad y facilidad de mantenimiento. El 22R ha sido ampliamente utilizado en una variedad de vehículos Toyota, tanto de carga como de pasajeros, debido a su robustez y capacidad para soportar condiciones de manejo exigentes. Con una reputación de larga vida útil y un buen rendimiento, el motor 22R es muy apreciado por los entusiastas y propietarios de vehículos Toyota.";
            hp = "105hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1986") {
            tipoMotor = "Motor 22R de 2.4 litros. Este motor es conocido por su durabilidad legendaria, fiabilidad y facilidad de mantenimiento. El 22R ha sido ampliamente utilizado en una variedad de vehículos Toyota, tanto de carga como de pasajeros, debido a su robustez y capacidad para soportar condiciones de manejo exigentes. Con una reputación de larga vida útil y un buen rendimiento, el motor 22R es muy apreciado por los entusiastas y propietarios de vehículos Toyota.";
            hp = "105hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1985") {
            tipoMotor = "Motor 22R de 2.4 litros. Este motor es conocido por su durabilidad legendaria, fiabilidad y facilidad de mantenimiento. El 22R ha sido ampliamente utilizado en una variedad de vehículos Toyota, tanto de carga como de pasajeros, debido a su robustez y capacidad para soportar condiciones de manejo exigentes. Con una reputación de larga vida útil y un buen rendimiento, el motor 22R es muy apreciado por los entusiastas y propietarios de vehículos Toyota.";
            hp = "105hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1984") {
            tipoMotor = "Motor 22R de 2.4 litros. Este motor es conocido por su durabilidad legendaria, fiabilidad y facilidad de mantenimiento. El 22R ha sido ampliamente utilizado en una variedad de vehículos Toyota, tanto de carga como de pasajeros, debido a su robustez y capacidad para soportar condiciones de manejo exigentes. Con una reputación de larga vida útil y un buen rendimiento, el motor 22R es muy apreciado por los entusiastas y propietarios de vehículos Toyota.";
            hp = "105hp";
            cc = "2366cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1983") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1982") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1981") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1980") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1979") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1978") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1977") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1976") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1975") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1974") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1973") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Hilux" && year === "1972") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1971") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1970") {
            tipoMotor = "Motor 18R-C de 2.0 litros. El 18R-C es conocido por su suavidad de funcionamiento, potencia adecuada y fiabilidad, lo que lo convierte en una opción popular para aquellos que buscan un motor sólido y duradero.";
            hp = "90hp";
            cc = "1968cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1969") {
            tipoMotor = "Motor 3R 1.9 litros. El 3R es conocido por su rendimiento robusto y su capacidad para soportar condiciones de manejo exigentes. La combinación de su tamaño relativamente pequeño y su potencia lo convierte en una opción popular para una variedad de aplicaciones de vehículos.";
            hp = "90hp";
            cc = "1858cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Hilux" && year === "1968") {
            tipoMotor = "Motor 3R 1.9 litros. El 3R es conocido por su rendimiento robusto y su capacidad para soportar condiciones de manejo exigentes. La combinación de su tamaño relativamente pequeño y su potencia lo convierte en una opción popular para una variedad de aplicaciones de vehículos.";
            hp = "90hp";
            cc = "1858cc";
            válvulas = "8 válvulas";
            distribución = "OHV (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }
        

/* INFORMACIÓN TOYOTA SUPRA */

        else if (modelo === "Supra" && year === "2019") {
            tipoMotor = "Motor de gasolina de 4 cilindros";
        } else if (modelo === "Supra" && year === "2021") {
            tipoMotor = "Motor de gasolina de 4 cilindros";
        } else if (modelo === "Supra" && year === "2020") {
            tipoMotor = "Motor de gasolina de 4 cilindros";
        } else if (modelo === "Supra" && year === "2019") {
            tipoMotor = "Motor de gasolina de 4 cilindros";
        }

/* INFORMACIÓN HONDA CIVIC */

        else if (modelo === "Civic" && year === "2024") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2023") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2022") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2021") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }else if (modelo === "Civic" && year === "2020") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2019") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2018") {
            tipoMotor = "Motor K20C2 2.0 litros. Este motor es parte de la serie K de motores de la marca y se destaca por su eficiencia en el consumo de combustible, su potencia y su rendimiento equilibrado. Los motores de la serie K de Honda son conocidos por su tecnología avanzada y su capacidad para ofrecer una combinación de potencia y eficiencia.";
            hp = "150hp";
            cc = "1996cc";
            válvulas = "16 válvulas";
            distribución = "DOHC (Doble árbol de levas)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2017") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2016") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2015") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2014") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2013") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2012") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2011") {
            tipoMotor = "Motor R18Z1 1.8 litros. Con una capacidad de 1.8 litros, el motor R18Z1 ofrece una combinación adecuada de potencia y economía de combustible, lo que lo convierte en una opción popular en una variedad de vehículos Honda. Este motor ha sido utilizado en varios modelos de la marca, proporcionando un rendimiento confiable y eficiente a lo largo del tiempo.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2010") {
            tipoMotor = "Motor R18A1 1.8 litros. Los motores de la serie R de Honda suelen ser conocidos por su suavidad de funcionamiento y respuesta ágil. Con una capacidad de 1.8 litros, el motor R18A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción popular en una variedad de vehículos Honda.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2009") {
            tipoMotor = "Motor R18A1 1.8 litros. Los motores de la serie R de Honda suelen ser conocidos por su suavidad de funcionamiento y respuesta ágil. Con una capacidad de 1.8 litros, el motor R18A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción popular en una variedad de vehículos Honda.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2008") {
            tipoMotor = "Motor R18A1 1.8 litros. Los motores de la serie R de Honda suelen ser conocidos por su suavidad de funcionamiento y respuesta ágil. Con una capacidad de 1.8 litros, el motor R18A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción popular en una variedad de vehículos Honda.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2007") {
            tipoMotor = "Motor R18A1 1.8 litros. Los motores de la serie R de Honda suelen ser conocidos por su suavidad de funcionamiento y respuesta ágil. Con una capacidad de 1.8 litros, el motor R18A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción popular en una variedad de vehículos Honda.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2006") {
            tipoMotor = "Motor R18A1 1.8 litros. Los motores de la serie R de Honda suelen ser conocidos por su suavidad de funcionamiento y respuesta ágil. Con una capacidad de 1.8 litros, el motor R18A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción popular en una variedad de vehículos Honda.";
            hp = "140hp";
            cc = "1799cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2005") {
            tipoMotor = "Motor D17A1 1.7 litros. Con una capacidad de 1.7 litros, el motor D17A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2004") {
            tipoMotor = "Motor D17A1 1.7 litros. Con una capacidad de 1.7 litros, el motor D17A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2003") {
            tipoMotor = "Motor D17A1 1.7 litros. Con una capacidad de 1.7 litros, el motor D17A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2002") {
            tipoMotor = "Motor D17A1 1.7 litros. Con una capacidad de 1.7 litros, el motor D17A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2001") {
            tipoMotor = "Motor D17A1 1.7 litros. Con una capacidad de 1.7 litros, el motor D17A1 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera.";
            hp = "115hp";
            cc = "1668cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "2000") {
            tipoMotor = "Motor D16Y7 1.6 litros. El motor D16Y7 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera. Este motor ha sido utilizado en varios modelos de Honda a lo largo de los años, brindando un rendimiento confiable a los conductores.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1999") {
            tipoMotor = "Motor D16Y7 1.6 litros. El motor D16Y7 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera. Este motor ha sido utilizado en varios modelos de Honda a lo largo de los años, brindando un rendimiento confiable a los conductores.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1998") {
            tipoMotor = "Motor D16Y7 1.6 litros. El motor D16Y7 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera. Este motor ha sido utilizado en varios modelos de Honda a lo largo de los años, brindando un rendimiento confiable a los conductores.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1997") {
            tipoMotor = "Motor D16Y7 1.6 litros. El motor D16Y7 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera. Este motor ha sido utilizado en varios modelos de Honda a lo largo de los años, brindando un rendimiento confiable a los conductores.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1996") {
            tipoMotor = "Motor D16Y7 1.6 litros. El motor D16Y7 ofrece una combinación adecuada de potencia y economía de combustible, siendo una opción versátil para aplicaciones tanto urbanas como en carretera. Este motor ha sido utilizado en varios modelos de Honda a lo largo de los años, brindando un rendimiento confiable a los conductores.";
            hp = "100hp";
            cc = "1590cc";
            válvulas = "16 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1995") {
            tipoMotor = "Motor D13B7 1.3 litros. Este motor se caracteriza por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1994") {
            tipoMotor = "Motor D13B7 1.3 litros. Este motor se caracteriza por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1993") {
            tipoMotor = "Motor D13B7 1.3 litros. Este motor se caracteriza por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios.";
            chp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1992") {
            tipoMotor = "Motor D13B7 1.3 litros. Este motor se caracteriza por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1991") {
            tipoMotor = "Motor D13B2 1.3 litros. Este motor es conocido por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios. Los motores D de Honda suelen destacarse por su suavidad de funcionamiento y su respuesta ágil, lo que los hace populares en vehículos pequeños y compactos.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1990") {
            tipoMotor = "Motor D13B2 1.3 litros. Este motor es conocido por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios. Los motores D de Honda suelen destacarse por su suavidad de funcionamiento y su respuesta ágil, lo que los hace populares en vehículos pequeños y compactos.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1989") {
            tipoMotor = "Motor D13B2 1.3 litros. Este motor es conocido por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios. Los motores D de Honda suelen destacarse por su suavidad de funcionamiento y su respuesta ágil, lo que los hace populares en vehículos pequeños y compactos.";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1988") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1987") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1986") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1985") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1984") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1983") {
            tipoMotor = "Motor EV 1.3 litros. l motor EV de 1.3 litros de Honda es un motor que formaba parte de la serie E de motores de la compañía. Este motor fue introducido en 1983 y se caracterizaba por su eficiencia, fiabilidad y rendimiento equilibrado. ";
            hp = "60hp";
            cc = "1296cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1982") {
            tipoMotor = "Motor EW 1.2 litros. Este motor es conocido por su eficiencia en el consumo de combustible, su tamaño compacto y su rendimiento adecuado para aplicaciones urbanas y de desplazamientos diarios. Los motores EW suelen destacarse por su suavidad de funcionamiento y su respuesta ágil, lo que los hace populares en vehículos pequeños y compactos.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1981") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1980") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1979") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1978") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1977") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1976") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1975") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1974") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1973") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        } else if (modelo === "Civic" && year === "1972") {
            tipoMotor = "Motor EK 1.2 litros. Este motor se caracteriza por ser compacto, eficiente y adecuado para aplicaciones urbanas y de desplazamientos cortos. Aunque es más pequeño en capacidad, el motor EK es conocido por su economía de combustible y su rendimiento adecuado para su tamaño.";
            hp = "50hp";
            cc = "1237cc";
            válvulas = "8 válvulas";
            distribución = "OHC (Árbol de levas en cabeza)";
            combustible = "Gasolina";
            cambiosAceite = "Cada 10,000 kilómetros";
        }

        info.innerHTML = `<h3>INFORMACIÓN</h3>
                    <p>Motor: ${tipoMotor}</p>
                    <p>Caballos de fuerza: ${hp}</p>
                    <p>Cilindrada: ${cc}</p>
                    <p>Válvulas: ${válvulas}</p>
                    <p>Distribución: ${distribución}</p>
                    <p>Combustible: ${combustible}</p>
                    <p>Cambio de Aceite Recomendado: ${cambiosAceite}</p>`;
    info.style.display = "block";
    }

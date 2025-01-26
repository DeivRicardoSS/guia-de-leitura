function DataConversor(data) {
    //entrada DD/MM/AAAA
    //saida AAAA-MM-DDThh:mm:ssZ
    let dd = data.substring(0, 2);
    let mm = data.substring(3, 5);
    let yyyy = data.substring(6, 10);
    return yyyy + "-" + mm + "-" + dd + "T00:00:00Z"
}
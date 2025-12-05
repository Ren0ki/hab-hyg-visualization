export function parsingScript(data){

    const rows = [];
    
                for(let i = 0; i < data.length; i++)
                {
                    const row = data[i];
                    const x = Number(row.Xg);
                    const y = Number(row.Yg);
                    const z = Number(row.Zg);
                    if (!isNaN(x) || !isNaN(y) || !isNaN(z)) {rows.push([x, y, z]);}
                }

    return rows;
}
import {con} from './connection.js'

export async function postarVilao (vilao){
    const comando = 
    `
    insert into tb_vilao (nm_vilao, ds_maldades, bt_poder )
    values(?,?,?);
    `

    const [resposta] = await con.query(comando,[vilao.nome,vilao.maldades,vilao.poder]) 
    vilao.id = resposta.InsertID;
    return vilao;
}

export async function ListarVilao(vilao){
    const comando = 
    `
        select id_vilao,
               nm_vilao,
               ds_maldades,
               bt_poder 
        from tb_vilao
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

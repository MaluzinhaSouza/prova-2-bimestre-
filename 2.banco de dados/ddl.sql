use tb_vilao;

create table tb_vilao(


id_vilao         int primary key auto_increment,
 nm_vilao         varchar(100),
 ds_maldades      varchar(100),
 bt_super_poder    bool

);

insert into tb_vilao(
nm_vilao,      
 ds_maldades ,    
 bt_super_poder    
)
value (	'malevola', 'roubar nene' , false );






 select * from tb_vilao;
 
show tables tb_vilao
drop tables tb_vilao

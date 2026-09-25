import { StudySessionData } from '@/types/study';

export const studySession: StudySessionData = {
  title: 'História do Maranhão Colonial',
  subtitle: 'Da Ocupação Pré-Colonial e Fundação de São Luís às Reformas Pombalinas',
  courseTitle: 'História do Maranhão — Curso de Formação de Praças (PM-MA)',
  author: 'Prof. Sergio Henrique (Aula 04 Pós-Edital)',
  targetExam: 'PM-MA — Soldado da Polícia Militar / Padrão CEBRASPE',
  overview:
    'Esta sessão de estudos foi desenhada com base estrita no material didático oficial de História do Maranhão e estruturada segundo as diretrizes pedagógicas e metodológicas da banca CEBRASPE/CESPE. O percurso percorre a ocupação indígena originária, o fracasso das capitanias hereditárias, a fundação francesa de São Luís, a Batalha de Guaxenduba, a militarização da Amazônia, a constituição do Estado do Maranhão, a Revolta de Beckman e as profundas reformas da Era Pombalina, culminando em uma bateria de questões inéditas de Certo ou Errado comentadas item a item.',
  estimatedTotalMinutes: 70,
  learningObjectives: [
    'Compreender os modos de vida dos povos indígenas pré-coloniais e o impacto biológico e demográfico da chegada europeia no Maranhão;',
    'Analisar a partilha das Capitanias Hereditárias (1534), a expedição de Ayres da Cunha (1540) e as razões do insucesso na ocupação inicial lusa;',
    'Identificar as motivações geopolíticas da França Equinocial (1612-1615), a fundação do Fort Saint Louis e o papel das alianças tupinambás;',
    'Examinar a Batalha de Guaxenduba (1614), a liderança de Jerônimo de Albuquerque Maranhão e seus reflexos na incorporação da Amazônia ao domínio luso;',
    'Diferenciar a criação político-administrativa do Estado do Maranhão (1621), suas mutações territoriais e a economia extrativista das drogas do sertão;',
    'Avaliar a gênese da Revolta de Beckman (1684), o conflito com os jesuítas em torno da escravidão nativa e o monopólio da Companhia de Comércio;',
    'Reconhecer as reformas estruturantes do Marquês de Pombal (1750-1777), o Diretório dos Índios, a expulsão jesuítica e a formação histórica das comunidades quilombolas no Maranhão.'
  ],
  blocks: [
    {
      id: 1,
      number: '01',
      title: 'Período Pré-Colonial e Primeiros Habitantes',
      topicTag: 'Ocupação Indígena',
      shortIntro:
        'A compreensão da ocupação do território maranhense sob a ótica decolonial, resgatando a rica diversidade dos povos autóctones antes da chegada europeia.',
      estimatedMinutes: 6,
      sourceReference: {
        sectionName: 'Período Pré-Colonial do Maranhão',
        pageRange: 'págs. 3 e 4'
      },
      keyTakeaways: [
        'População estimada no século XVII em cerca de 250 mil indígenas divididos em aproximadamente 30 etnias;',
        'Modo de vida integrado: caçadores, coletores e agricultores em equilíbrio ecológico nas florestas, rios e litorais;',
        'Relações intertribais dinâmicas, intercalando alianças pontuais e conflitos armados;',
        'O impacto biológico devastador das doenças europeias (varíola e gripe), para as quais os nativos não possuíam imunidade;',
        'Sobrevivência contemporânea de grupos como Krikati, Canela, Guajajara-tenetehara, Kaàpor, Awa Guajá e Gavião.'
      ],
      sections: [
        {
          subheading: 'A Produção do Espaço sob a Ótica Decolonial',
          paragraphs: [
            'Antes do desembarque dos colonizadores europeus, o espaço geográfico do atual estado do Maranhão já era intensamente produzido e humanizado por centenas de comunidades indígenas autônomas. Rompendo com a visão eurocêntrica tradicional — que costuma tratar o território como um "vazio demográfico" à espera da civilização —, a abordagem histórica moderna reconhece que essas sociedades possuíam complexas organizações políticas, regras de parentesco, crenças espirituais e sofisticadas técnicas de manejo ambiental.',
            'Grande parte dos povos que habitavam a região subsistia como caçadores, coletores e agricultores, distribuídos por aldeamentos dispersos pelas bacias hidrográficas, florestas e faixas litorâneas. Desenvolveram conhecimento profundo sobre a botânica e a fauna tropicais, cultivando raízes e plantas alimentícias e mantendo redes comerciais e sociais com povos vizinhos.'
          ],
          callouts: [
            {
              type: 'importante',
              title: 'Diversidade Cultural e Equilíbrio Ambiental',
              content:
                'Os povos originários do Maranhão não formavam um bloco homogêneo. Cada grupo dispunha de dialetos próprios, cosmologias singulares e sistemas políticos autárquicos, garantindo uma relação sustentável com os recursos naturais do litoral ao sertão.'
            }
          ]
        },
        {
          subheading: 'Conflitos, Epizootias e Redução Populacional',
          paragraphs: [
            'O cotidiano pré-colonial não era isento de tensões. O contato frequente entre etnias vizinhas tanto ensejava alianças defensivas e comerciais quanto deflagrava guerras intermitentes por domínio territorial ou afirmação de prestígio.',
            'Entretanto, a maior ruptura demográfica ocorreu com a introdução de patógenos exógenos trazidos pelas primeiras navegações europeias. Doenças como a varíola e a gripe causaram verdadeira devastação biológica entre os indígenas, desprovidos de defesas imunológicas. Já no início do século XVII, registrava-se a presença de cerca de 250 mil índios pertencentes a cerca de 30 etnias distintas na capitania.'
          ],
          callouts: [
            {
              type: 'atencao',
              title: 'Resistência e Sobrevivência Étnica Atual',
              content:
                'A despeito do violento processo colonial, nem todas as etnias foram aniquiladas. Sobreviiveram até os dias atuais povos representativos como os Krikati, Canela, Guajajara-tenetehara, Kaàpor, Awa Guajá e Gavião.'
            },
            {
              type: 'olhar_cebraspe',
              title: 'Alerta da Metodologia CEBRASPE',
              content:
                'Fique atento a assertivas que afirmem que a redução populacional indígena decorreu de "migração espontânea e pacífica para o interior" ou que aleguem que "nenhum povo originário sobreviveu no Maranhão atual". O material pontua expressamente o extermínio bélico, o impacto viral da varíola e a permanência de etnias específicas.'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'Primeiras Tentativas e as Capitanias Hereditárias (1534-1540)',
      topicTag: 'Início da Colonização',
      shortIntro:
        'A implantação do sistema de capitanias hereditárias por D. João III e a trágica expedição de Ayres da Cunha que originou a povoação de Nazareth.',
      estimatedMinutes: 6,
      sourceReference: {
        sectionName: 'Criação de São Luiz / Capitanias Hereditárias',
        pageRange: 'págs. 4 e 5'
      },
      keyTakeaways: [
        '1534: D. João III institui as Capitanias Hereditárias no Brasil, replicando o modelo bem-sucedido nos arquipélagos da Madeira e Cabo Verde;',
        'Território dividido entre 15 donatários com lotes do litoral à linha imaginária do Tratado de Tordesilhas;',
        'Fracasso generalizado do modelo, excetuando-se as capitanias de São Vicente e Pernambuco;',
        'O quinhão maranhense foi fatiado e não conheceu ocupação efetiva nesta etapa inicial;',
        '1540: Expedição de Ayres da Cunha enviada para povoar a donataria de João de Barros sofre naufrágio na costa maranhense;',
        'Sobreviventes chegam à confluência dos rios Mearim, Munim e Itapecuru, fundando a efêmera vila de Nazareth.'
      ],
      sections: [
        {
          subheading: 'O Modelo das Capitanias Hereditárias (1534)',
          paragraphs: [
            'Em 1534, a Coroa Portuguesa, sob o comando do rei D. João III, adotou a primeira decisão sistemática para ocupar a América Portuguesa: a instituição das Capitanias Hereditárias. Inspirado na experiência prévia de povoamento insular na Ilha da Madeira e em Cabo Verde, na costa africana, o modelo consistia em delegar a 15 nobres e benfeitores da corte (os capitães donatários) a tarefa de colonizar, cultivar e defender faixas de terra que se estendiam do litoral até o limite do Tratado de Tordesilhas.',
            'Para a Coroa lusitana, o arranjo atendia aos princípios mercantilistas de transferir os pesados custos e riscos de colonização à iniciativa privada em troca de tributos e do monopólio régio sobre produtos estratégicos. Para os donatários, todavia, o desafio revelou-se colossal: recursos escassos, isolamento geográfico em relação a Lisboa e resistência hostil dos povos nativos tornaram a empreitada deficitária.'
          ],
          callouts: [
            {
              type: 'cuidado_com_a_pegadinha',
              title: 'As Únicas Exceções de Sucesso',
              content:
                'À exceção das capitanias de São Vicente e Pernambuco, que prosperaram graças à cana-de-açúcar e alianças locais, todo o restante do sistema de capitanias hereditárias fracassou. A primeira capitania do Maranhão foi dividida em duas e não chegou a ser efetivamente ocupada.'
            }
          ]
        },
        {
          subheading: 'A Expedição de Ayres da Cunha e a Vila de Nazareth (1540)',
          paragraphs: [
            'Os primeiros registros documentais sobre tentativa de fixação urbana na costa maranhense reportam ao ano de 1540. Naquela ocasião, o fidalgo português Ayres da Cunha organizou uma vultosa esquadra a partir de Lisboa com o propósito de tomar posse e explorar a capitania que havia sido outorgada ao ilustre donatário João de Barros.',
            'O relato do próprio João de Barros atesta o desfecho trágico da empreitada: a frota naufragou imediatamente ao alcançar os baixios traiçoeiros da costa maranhense. Os náufragos sobreviventes lograram alcançar a grande ilha estabelecida na desembocadura confluente de três grandes rios — hoje identificados como Mearim, Munim e Itapecuru —, nas cercanias da linha do Equador, e ali estabeleceram o pequeno e precário arraial denominado vila de Nazareth.'
          ],
          callouts: [
            {
              type: 'guarde_isso',
              title: 'Vila de Nazareth (1540)',
              content:
                'A fundação da vila de Nazareth decorreu do naufrágio da expedição de Ayres da Cunha (associada à doação a João de Barros). Localizava-se na confluência dos rios Mearim, Munim e Itapecuru.'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'Daniel de La Touche e a França Equinocial (1612-1615)',
      topicTag: 'França Equinocial',
      shortIntro:
        'A tentativa colonial francesa no litoral norte, a fundação de São Luís do Maranhão e a diplomacia tupinambá perante a corte de Luís XIII.',
      estimatedMinutes: 7,
      sourceReference: {
        sectionName: 'Daniel de La Touche - Fort Saint Louis 1612',
        pageRange: 'págs. 6 a 8'
      },
      keyTakeaways: [
        'França Equinocial (1612-1615): projeto imperial francês comandado pelo general da marinha Daniel de La Touche, Senhor de La Ravardière;',
        '26 de julho de 1612: aporte na ilha desabitada de Upaon-mirim ("ilha pequena"), a doze léguas de Upaon-Açu;',
        'Reconhecimento pacífico liderado por Des Vaux com apoio de náufragos franceses (Gérard e Du Manoir);',
        '12 de agosto de 1612: primeira missa rezada por padres capuchinhos sob o registro do frei Claude d’Abbeville;',
        '8 de setembro de 1612: fundação oficial do "Fort Saint Louis" em honra ao rei Luís XIII da França, dando origem a São Luís;',
        'Aliança sólida com os índios Tupinambás (antropófagos e inimigos dos Tupiniquins);',
        'Envio de 6 indígenas a Paris como embaixadores; 3 morreram de frio e receberam batismo cristão;',
        'Rendição em 1615 mediante indenização; inexistência de herança arquitetônica francesa material remanescente.'
      ],
      sections: [
        {
          subheading: 'O Projeto da França Equinocial e o Aporte em Upaon-mirim',
          paragraphs: [
            'No início do século XVII, as monarquias europeias disputavam intensamente o controle de rotas atlânticas e das terras equatoriais americanas. O termo "Equinocial" deriva de equinócio, em alusão à proximidade com a Linha do Equador. Nesse cenário de competição interimperial, o governo da França oficializou uma incursão colonizadora no Norte do Brasil, conferindo comando supremo ao General da Marinha Daniel de La Touche, Senhor de La Ravardière.',
            'Em 26 de julho de 1612, as naus francesas aportaram inicialmente numa ilha desabitada designada pelos nativos como Upaon-mirim ("ilha pequena"), localizada a cerca de 12 léguas da ilha principal. Cauteloso, La Touche enviou o emissário Des Vaux à Ilha Grande (chamada de Upaon-Açu pelos autóctones) para sondar o terreno e negociar com os habitantes nativos. A recepção aos franceses foi grandiosa e acolhedora, facilitada por laços comerciais anteriores e pela intermediação de náufragos conterrâneos que já residiam harmoniosamente entre os indígenas, como o capitão Gérard e o comerciante Du Manoir.'
          ],
          callouts: [
            {
              type: 'compare',
              title: 'Upaon-mirim versus Upaon-Açu',
              content:
                'Upaon-mirim ("ilha pequena"): ilha desabitada onde os franceses aportaram inicialmente em 26 de julho de 1612. Upaon-Açu ("ilha grande"): a ilha habitada onde a expedição celebrou a missa e fundou a capital.',
              comparisonItems: {
                conceptA: {
                  label: 'Upaon-mirim',
                  details: 'Ilha desabitada, a 12 léguas da Ilha Grande. Ponto de escala e envio de batedores.'
                },
                conceptB: {
                  label: 'Upaon-Açu (Ilha Grande)',
                  details: 'Ilha habitada por Tupinambás onde foi rezada a 1ª missa e construído o Fort Saint Louis.'
                }
              }
            }
          ]
        },
        {
          subheading: 'A Fundação de São Luís e a Aliança Tupinambá',
          paragraphs: [
            'Em 12 de agosto de 1612, padres capuchinhos rezaram solenemente a primeira missa na nova terra, episódio fartamente registrado nas crônicas de Frei Claude d’Abbeville. Semanas depois, em 8 de setembro de 1612, foi fundado o reduto defensivo batizado como "Fort Saint Louis" (Forte de São Luís), tributo ao jovem monarca gaulês Luís XIII. Esta efeméride consagra São Luís como a única capital brasileira fundada oficialmente por iniciativa francesa.',
            'Para consolidar a ocupação contra a previsível reação luso-espanhola, La Touche estreitou aliança militar e de compadrio com os índios Tupinambás. Esse povo mantinha guerras ancestrais contra os Tupiniquins e praticava rituais antropofágicos como método de apropriação das forças inimigas e consolidação de compromissos guerreiros.'
          ],
          callouts: [
            {
              type: 'na_prova',
              title: 'Embaixadores Tupinambás na Corte Francesa',
              content:
                'Entre 1613 e 1614, seis tupinambás foram transportados a Paris para serem apresentados na corte de Luís XIII, visando demonstrar aos nobres o sucesso da missão. Três deles adoeceram e morreram de frio e alucinações na Europa, após serem batizados na fé católica com nomes franceses (Manen/Anthoine, Patuá/Jacques e Carypyra/François).'
            }
          ]
        },
        {
          subheading: 'O Desfecho em 1615 e o Imaginário Historiográfico',
          paragraphs: [
            'Após sucessivos confrontos armados com as forças ibéricas, Daniel de La Touche e seus homens capitularam formalmente em novembro de 1615. Todavia, a rendição foi pactuada mediante o pagamento de uma indenização financeira compensatória pelos investimentos e perdas materiais que os franceses alegavam ter sofrido.',
            'A historiografia maranhense do século XX construiu um forte imaginário cívico em torno da "origem francesa", utilizando essa narrativa como símbolo de sofisticação e singularidade do Maranhão frente aos outros estados brasileiros. No entanto, pesquisas históricas rigorosas demonstram que a efêmera ocupação de três anos não deixou edificações materiais remanescentes nem influências culturais palpáveis no linguajar ou nas instituições locais. Os casarões coloniais preservados pertencem ao ciclo de riqueza lusitana posterior.'
          ],
          callouts: [
            {
              type: 'olhar_cebraspe',
              title: 'Pegadinha Clássica de Prova',
              content:
                'O CEBRASPE frequentemente testa a ilusão material do período francês. Os itens corretos ressaltam que NÃO restaram construções físicas francesas nem heranças culturais profundas no Maranhão; a arquitetura histórica de São Luís — tombada pela UNESCO em 1997 — é fruto da urbanização colonial portuguesa dos séculos XVIII e XIX.'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola (1614-1615)',
      topicTag: 'Conflito Militar',
      shortIntro:
        'O confronto militar decisivo nas cercanias de Icatu, a liderança de Jerônimo de Albuquerque e a expulsão definitiva dos franceses.',
      estimatedMinutes: 6,
      sourceReference: {
        sectionName: 'Batalha de Guaxenduba',
        pageRange: 'págs. 9 e 10'
      },
      keyTakeaways: [
        'Batalha de Guaxenduba (19 de novembro de 1614): ocorrida próximo à atual cidade de Icatu-MA;',
        'Beligerantes: forças lusas aliadas aos Tabajaras versus forças francesas coligadas aos Tupinambás;',
        'Jerônimo de Albuquerque Maranhão (1548-1618): administrador colonial nascido no Brasil, fundador de Natal-RN e primeiro brasileiro a comandar forças navais de defesa;',
        'Artifício militar luso: La Ravardière expediu ultimato de 4 horas para rendição; os portugueses aproveitaram o prazo para atacar de surpresa;',
        'Mito milagroso: a aparição radiosa de Nossa Senhora da Vitória transformando terra em pólvora;',
        '4 de novembro de 1615: expulsão definitiva francesa e concessão do sobrenome "Maranhão" a Jerônimo pelo rei Filipe III;',
        'Impacto estratégico: a vitória permitiu o domínio português sobre o litoral setentrional e abriu a conquista do Vale Amazônico.'
      ],
      sections: [
        {
          subheading: 'O Combate de 19 de Novembro de 1614 em Icatu',
          paragraphs: [
            'Sob a égide da União Ibérica (1580-1640), quando as coroas de Portugal e Espanha estavam unificadas sob o cetro de Filipe III, a corte não tolerou o encrave francês no Norte. A resistência armada foi organizada sob a liderança de Jerônimo de Albuquerque e Diogo de Campos.',
            'O embate decisivo ocorreu em 19 de novembro de 1614, na localidade de Guaxenduba (próxima à atual cidade maranhense de Icatu). As forças em choque reproduziam rivalidades nativas: do lado português, lutavam os bravos índios Tabajaras; do lado francês, combatiam os guerreiros Tupinambás.'
          ],
          callouts: [
            {
              type: 'compare',
              title: 'Alianças Indígenas em Guaxenduba',
              content:
                'A banca costuma inverter as coalizões étnicas no confronto de Guaxenduba. Guarde a associação correta:',
              comparisonItems: {
                conceptA: {
                  label: 'Forças Portuguesas',
                  details: 'Comandadas por Jerônimo de Albuquerque e Diogo de Campos, aliadas aos indígenas TABAJARAS.'
                },
                conceptB: {
                  label: 'Forças Francesas',
                  details: 'Comandadas por Daniel de La Touche (La Ravardière), aliadas aos indígenas TUPINAMBÁS.'
                }
              }
            }
          ]
        },
        {
          subheading: 'A Manobra Militar do Ultimato e o Milagre da Pólvora',
          paragraphs: [
            'Embora os franceses detivessem superioridade numérica e de armamentos, La Ravardière cometeu um grave erro tático: enviou a Jerônimo de Albuquerque uma intimação concedendo quatro horas de trégua para a rendição incondicional dos lusitanos. O capitão Diogo de Campos alertou Jerônimo de que aquele intervalo era exatamente o que as tropas portuguesas necessitavam para reorganizar suas linhas de fuzilaria.',
            'Aproveitando a complacência do inimigo, o exército lusitano desferiu um assalto de surpresa fulminante antes do término do prazo estipulado, impondo severas baixas às fileiras francesas e desbaratando a sua ofensiva.',
            'A súbita reviravolta militar deu margem à criação de uma lenda sacra de fundo católico: narrava-se que, na iminência de se esgotar a munição portuguesa, uma mulher radiosa e diáfana passou a percorrer as trincheiras recolhendo a terra do solo e convertendo-a milagrosamente em pólvora para alimentar os arcabuzes. Em homenagem ao milagre, a Virgem Maria foi aclamada como Nossa Senhora da Vitória, tornando-se padroeira da matriz de São Luís.'
          ],
          callouts: [
            {
              type: 'guarde_isso',
              title: 'Jerônimo de Albuquerque "Maranhão"',
              content:
                'Nascido no Brasil colonial (foi o primeiro brasileiro a chefiar uma força naval defensiva e fundador de Natal/RN), Jerônimo recebeu expressamente do rei Filipe III de Espanha a mercê de adotar o sobrenome honorífico "Maranhão" pela reconquista do território.'
            },
            {
              type: 'importante',
              title: 'Abertura para a Amazônia',
              content:
                'A vitória militar em Guaxenduba culminou na capitulação definitiva em 4 de novembro de 1615, impedindo que a costa norte caísse sob domínio francês e viabilizando a subsequente expansão portuguesa por toda a bacia hidrográfica amazônica.'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      number: '05',
      title: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
      topicTag: 'Defesa e Extrativismo',
      shortIntro:
        'A construção de redes de fortificações pela bacia amazônica, o ciclo extrativista das drogas do sertão e a reação contra a invasão holandesa.',
      estimatedMinutes: 6,
      sourceReference: {
        sectionName: 'Militarização Portuguesa da Região Norte',
        pageRange: 'págs. 10 e 11'
      },
      keyTakeaways: [
        '1616: Construção do Forte do Presépio em Santa Maria de Belém do Grão-Pará logo após a expulsão dos franceses de São Luís;',
        'Contenção de ingleses e holandeses: estes haviam erguido os fortes Orange e Nassau no rio Xingu em 1599; foram tomados por tropas lusas em 1623;',
        '1669: Fundação do Forte de São José do Rio Negro, marco originário da moderna Manaus;',
        'Economia das "Drogas do Sertão": extrativismo de baunilha, anil, cacau, guaraná, salsa, pau-cravo, gergelim, pequi, noz de pixurim e castanha-do-pará;',
        'Base de sustentação: mão de obra indígena nativa (escravizada ou arregimentada nas missões);',
        'Invasão Holandesa no Maranhão (1641-1644) e vitória restauradora de Antônio Teixeira de Melo em 1644.'
      ],
      sections: [
        {
          subheading: 'A Rede de Fortes e o Fechamento da Fronteira Setentrional',
          paragraphs: [
            'A expulsão dos franceses em 1615 revelou à Coroa a extrema vulnerabilidade militar da calha amazônica. No ano seguinte, em 1616, foi fundado na capitania do Grão-Pará o emblemático Forte do Presépio (núcleo da futura Belém), a primeira e mais determinante fortificação levantada para policiar a entrada do grande rio.',
            'O vale já vinha sendo cobiçado por outros rivais europeus: desde 1595, Walter Raleigh explorara as imediações do Orenoco, e em 1599 os holandeses ergueram os fortes Orange e Nassau às margens do rio Xingu. Em 1623, tropas ibéricas atacaram e tomaram esses entrepostos, derrotando coligações de holandeses, ingleses e franceses. Décadas depois, em 1669, com a interiorização de jesuítas e apresadores de índios, foi erigido o Forte de São José do Rio Negro, embrião da cidade de Manaus.'
          ],
          callouts: [
            {
              type: 'atencao',
              title: 'Cronologia e Nomes dos Fortes',
              content:
                '1616: Forte do Presépio (Belém-PA) | 1623: Tomada dos fortes Orange e Nassau (rio Xingu) | 1669: Forte de São José do Rio Negro (Manaus-AM).'
            }
          ]
        },
        {
          subheading: 'O Circuito Extrativista das Drogas do Sertão',
          paragraphs: [
            'Diferente do Nordeste açucareiro, centrado na monocultura do canavial e no tráfico transatlântico negreiro, a base econômica primordial do Norte colonial radicou-se no extrativismo florestal de especiarias conhecidas genericamente como "drogas do sertão": anil, guaraná, salsa, corantes, pau-cravo, noz de pixurim, castanha-do-pará, gergelim, pequi e baunilha.',
            'A extração e a navegação fluvial dessas riquezas dependiam visceralmente do conhecimento e da mão de obra indígena — fosse por meio do trabalho forçado através do apresamento de nativos nos sertões, fosse pela tutela exercida pelas ordens missionárias (especialmente os jesuítas).'
          ],
          callouts: [
            {
              type: 'guarde_isso',
              title: 'Invasão Holandesa no Maranhão (1641-1644)',
              content:
                'No contexto das invasões flamengas ao Nordeste, os holandeses ocuparam São Luís em busca de terras para cultivo de cana-de-açúcar. A reação lusa iniciou-se em 1642 sob a liderança do capitão Antônio Teixeira de Melo, conquistando a expulsão dos invasores em 1644.'
            }
          ]
        }
      ]
    },
    {
      id: 6,
      number: '06',
      title: 'O Estado do Maranhão e Grão-Pará: Organização Administrativa',
      topicTag: 'Evolução Política',
      shortIntro:
        'A criação do Estado do Maranhão em 1621, sua separação orgânica do Estado do Brasil e as transformações da economia regional do século XVII.',
      estimatedMinutes: 6,
      sourceReference: {
        sectionName: 'Estado do Maranhão e Grão Pará',
        pageRange: 'págs. 12 a 14'
      },
      keyTakeaways: [
        '13 de junho de 1621: Rei Filipe III institui o Estado do Maranhão, administrativamente independente do Estado do Brasil;',
        'Sede em São Luís, agrupando inicialmente as capitanias do Maranhão, Grão-Pará e Ceará;',
        'Motivações: isolamento geográfico decorrente das correntes marítimas do Atlântico e necessidade de resguardar o Norte;',
        '1737: Transferência da capital administrativa de São Luís para Santa Maria de Belém do Grão-Pará;',
        'Alterações de nomenclatura: Estado do Maranhão e Grão-Pará (1654/1655-1751) e Grão-Pará e Maranhão (1751-1772/1774);',
        'Economia do séc. XVII: colonização lenta, lavouras de subsistência, primeiros engenhos no Itapecuru e o algodão utilizado como moeda circulante.'
      ],
      sections: [
        {
          subheading: 'A Instituição do Estado do Maranhão em 1621',
          paragraphs: [
            'A América Portuguesa nunca formou um bloco administrativo uniforme sob controle exclusivo da Bahia. Em 13 de junho de 1621, durante o período da União Ibérica, o rei Filipe III decretou a criação do Estado do Maranhão, estabelecendo uma nova entidade geopolítica diretamente subordinada a Lisboa e inteiramente separada do Estado do Brasil (cuja sede residia em Salvador).',
            'Com capital instalada em São Luís, a nova jurisdição englobava as capitanias do Maranhão, do Grão-Pará e do Ceará. O objetivo era mitigar os obstáculos de navegação — as correntes marítimas da costa equatorial dificultavam enormemente a comunicação por mar entre São Luís e Salvador, tornando a viagem à Europa frequentemente mais rápida que o trajeto à capital baiana.'
          ],
          callouts: [
            {
              type: 'na_prova',
              title: 'Autonomia Frente ao Estado do Brasil',
              content:
                'O Estado do Maranhão NÃO era uma capitania subordinada ao Governador-Geral ou Vice-Rei em Salvador. Era um Estado ultramarino autônomo perante a Coroa Portuguesa.'
            }
          ]
        },
        {
          subheading: 'Mutações de Nomenclatura, Mudança da Capital (1737) e Economia',
          paragraphs: [
            'Em 1654/1655, a unidade passou a denominar-se oficialmente Estado do Maranhão e Grão-Pará. Conforme o peso demográfico e a exploração florestal da Amazônia se intensificaram, ocorreu em 1737 a transferência da capital de São Luís para Santa Maria de Belém do Grão-Pará.',
            'Posteriormente, em 1751, inverteu-se o nome oficial para Estado do Grão-Pará e Maranhão, que mais tarde viria a ser desmembrado em duas unidades autônomas: o Estado do Grão-Pará e Rio Negro e o Estado do Maranhão e Piauí.',
            'Ao longo do século XVII, a capitania maranhense experimentou o que historiadores chamam de "colonização tardia": crescimento populacional lento, poucos engenhos (estabelecidos sobretudo nas margens do Rio Itapecuru), cultivo incipiente de mandioca, tabaco, cana e algodão. Devido à crônica escassez de moedas metálicas de ouro e prata na praça de São Luís, o algodão em novelo ou em tecido passava a circular formalmente como padrão monetário e meio de troca.'
          ],
          callouts: [
            {
              type: 'guarde_isso',
              title: 'O Algodão como Moeda de Circulação',
              content:
                'Antes de consolidar-se como grande commodity de exportação na Era Pombalina, o algodão nativo maranhense funcionava no século XVII como moeda corrente no comércio cotidiano da colônia.'
            }
          ]
        }
      ]
    },
    {
      id: 7,
      number: '07',
      title: 'A Revolta de Beckman (1684-1685) e o Estanco Régio',
      topicTag: 'Movimento Nativista',
      shortIntro:
        'A rebelião dos senhores de engenho contra o monopólio da Companhia de Comércio de 1682, o choque com os padres jesuítas e a repressão lusa.',
      estimatedMinutes: 7,
      sourceReference: {
        sectionName: 'Revolta de Beckman',
        pageRange: 'págs. 15 e 23'
      },
      keyTakeaways: [
        '1682: Coroa cria a Companhia de Comércio do Estado do Maranhão com estanco (monopólio absoluto) de importação e exportação;',
        'Compromissos não cumpridos: fornecer 500 escravizados africanos por ano e abastecer a região com manufaturas de boa qualidade a preços justos;',
        'Atrito triplo: proprietários de terras precisavam de braços de trabalho, mas a Companhia não entregava escravos e os jesuítas proibiam escravizar indígenas;',
        '24 de fevereiro de 1684: insurreição armada liderada pelos irmãos Manuel e Tomás Beckman invade e saqueia os armazéns da Companhia;',
        'Ações dos rebeldes: expulsão dos padres jesuítas, deposição do governador colonial e controle de São Luís por mais de um ano;',
        '1685: Chegada do novo governador régio Gomes Freire de Andrade para sufocar a revolta sem resistência armada direta;',
        'Sentenças desiguais: Manuel Beckman condenado à forca; Tomás Beckman degredado (expulso); demais rebeldes a prisão perpétua.'
      ],
      sections: [
        {
          subheading: 'A Companhia de Comércio de 1682 e o Conflito Jesuítico',
          paragraphs: [
            'Na década de 1680, a crise de mão de obra e abastecimento no Maranhão atingira níveis insustentáveis. Para regularizar a situação e elevar as receitas régias, a Coroa estabeleceu em 1682 a Companhia de Comércio do Estado do Maranhão, concedendo-lhe o "estanco" — privilégio monopolista exclusivo para adquirir todos os gêneros agrícolas locais e vender todos os produtos europeus importados.',
            'Como contrapartida social, a Companhia comprometera-se formalmente a introduzir na província uma cota de pelo menos 500 escravizados africanos a cada ano. Essa promessa visava pacificar a violenta discórdia travada entre os colonos/senhores de engenho e a Companhia de Jesus: os jesuítas vetavam severamente a captura e a escravização dos índios aldeados, gerando revolta nos fazendeiros que necessitavam desesperadamente de braços para as lavouras.',
            'No entanto, a Companhia descumpriu frontalmente suas obrigações: comprou a colheita local por preços aviltantes, despejou manufaturas estragadas a valores exorbitantes e não desembarcou a cota prometida de escravizados.'
          ],
          callouts: [
            {
              type: 'cuidado_com_a_pegadinha',
              title: 'Motivação Mercantil e Econômica, Não Religiosa',
              content:
                'O conflito com os jesuítas na Revolta de Beckman não possuía fundo teológico ou doutrinário, mas estritamente econômico e mercantilista: tratava-se do acesso ao trabalho compulsório indígena contra a postura protetiva da ordem missionária.'
            }
          ]
        },
        {
          subheading: 'A Invasão de 1684, o Governo Revolucionário e a Repressão',
          paragraphs: [
            'Na noite de 24 de fevereiro de 1684, liderados pelos irmãos senhores de engenho Manuel e Tomás Beckman, colonos e comerciantes invadiram e saquearam os depósitos da odiada Companhia de Comércio em São Luís. Em seguida, os revoltosos expulsaram os jesuítas da ilha e destituíram o governador colonial, assumindo as rédeas da administração municipal.',
            'Os rebelados sustentaram o controle político sobre São Luís por mais de um ano. Com o intuito de justificar o levante e renovar juramentos de lealdade ao monarca lusitano, Tomás Beckman viajou em pessoa a Lisboa. Contudo, foi detido no desembarque e a Coroa enviou em 1685 um novo mandatário, o governador Gomes Freire de Andrade, acompanhado de tropas para restabelecer a autoridade absoluta do Reino.',
            'Os implicados foram submetidos a julgamento sumário: Manuel Beckman (o principal caudilho) foi sentenciado e executado por enforcamento; Tomás Beckman foi condenado ao degredo e expulsão definitiva; e os demais líderes foram encarcerados sob pena de prisão perpétua.'
          ],
          callouts: [
            {
              type: 'olhar_cebraspe',
              title: 'Cuidado com a Troca de Penas no CEBRASPE',
              content:
                'A banca costuma elaborar itens afirmando que "os dois irmãos Beckman foram enforcados" ou que "Manuel Beckman recebeu anistia régia e retornou a Portugal". Lembre-se: Manuel Beckman foi o enforcado; Tomás Beckman foi degredado (expulso da terra).'
            }
          ]
        }
      ]
    },
    {
      id: 8,
      number: '08',
      title: 'A Era Pombalina e as Comunidades Quilombolas no Maranhão',
      topicTag: 'Reformas e Sociedade',
      shortIntro:
        'A modernização iluminista do Marquês de Pombal, a Companhia de Comércio de 1755, a expulsão dos jesuítas e a formação histórica dos quilombos maranhenses.',
      estimatedMinutes: 8,
      sourceReference: {
        sectionName: 'Era Pombalina / Questões Comentadas',
        pageRange: 'págs. 16, 21, 26 a 29'
      },
      keyTakeaways: [
        'Marquês de Pombal (1750-1777), primeiro-ministro de D. José I: arquétipo do Despotismo Esclarecido lusitano;',
        '1755: Criação da Companhia Geral de Comércio do Grão-Pará e Maranhão, alavancando a migração e as culturas de arroz e algodão;',
        'Apogeu do algodão maranhense como o produto agrícola mais valioso da balança comercial do Império português;',
        'Diretório dos Índios (lei de 1755, vigência em 1757): aldeamentos transformados em vilas e aldeias geridas por diretores leigos laicos;',
        '1759: Expulsão compulsória dos Jesuítas da América portuguesa com confisco de bens e liquidação das missões;',
        'Extinção formal das capitanias hereditárias remanescentes, transformando-as em Capitanias Reais subordinadas ao Estado;',
        'Comunidades Quilombolas: surgiram da resistência e fuga de escravizados africanos no auge algodoeiro do fim do séc. XVIII e abandono fundiário do séc. XIX;',
        'Concentração nas regiões da Baixada Maranhense e vales do Itapecuru e Mearim;',
        'Riqueza sociocultural: Bumba-meu-boi, Tambor de Crioula, Tambor de Mina, extrativismo do babaçu e amparo no art. 68 do ADCT.'
      ],
      sections: [
        {
          subheading: 'O Reformismo Ilustrado do Marquês de Pombal (1750-1777)',
          paragraphs: [
            'Durante o reinado de D. José I, Sebastião José de Carvalho e Melo — o célebre Marquês de Pombal — conduziu um vasto programa de modernização e centralização absolutista conhecido como Despotismo Esclarecido. Diante do declínio iminente da extração de ouro e diamantes nas Minas Gerais, Pombal voltou os olhos para o potencial agropecuário e florestal do Norte da colônia.',
            'Em 1755, fundou a influente Companhia Geral de Comércio do Grão-Pará e Maranhão, dotada de privilégios para monopolizar o frete naval e o tráfico de escravizados. A companhia financiou a importação de sementes, incentivou a migração de trabalhadores de outros rincões nordestinos e transformou o algodão e o arroz nos maiores motores de exportação do Maranhão. O surto de riqueza decorrente dessa lavoura financiou a construção do imponente conjunto de sobrados e casarões azulejados do Centro Histórico de São Luís.'
          ],
          callouts: [
            {
              type: 'compare',
              title: 'Companhia de 1682 vs Companhia de 1755',
              content:
                'Não confunda as duas companhias comerciais maranhenses cobradas em provas:',
              comparisonItems: {
                conceptA: {
                  label: 'Companhia de Comércio de 1682',
                  details: 'Criada no séc. XVII, causou revolta generalizada por preços extorsivos e falta de escravos (origem da Revolta de Beckman).'
                },
                conceptB: {
                  label: 'Companhia do Grão-Pará e Maranhão (1755)',
                  details: 'Criada por Pombal no séc. XVIII, promoveu o auge da exportação do arroz e algodão e financiou os casarões de São Luís.'
                }
              }
            }
          ]
        },
        {
          subheading: 'Diretório dos Índios e a Expulsão dos Jesuítas (1759)',
          paragraphs: [
            'Visando subordinar os povos nativos à autoridade direta da Coroa e afastar a tutela do clero, D. José I e Pombal instituíram o Diretório dos Índios (lei promulgada em 1755 e aplicada no Maranhão e Grão-Pará em 1757). Por meio desse ato normativo, as missões e aldeamentos foram transformados em vilas e povoados regulares, passando a administração temporal para diretores públicos leigos.',
            'Em 1759, alegando que a Companhia de Jesus operava como um "Estado dentro do Estado" e obstaculizava a política integracionista da Coroa, Pombal decretou a expulsão sumária de todos os jesuítas do Brasil, confiscando seus prédios, fazendas e capitais.'
          ],
          callouts: [
            {
              type: 'importante',
              title: 'Centralização Régia e Fim das Capitanias Hereditárias',
              content:
                'Pombal também extinguiu em definitivo as Capitanias Hereditárias, convertendo todas as parcelas do território colonial em Capitanias Reais governadas diretamente por delegados da Coroa, reforçando a autoridade monárquica.'
            }
          ]
        },
        {
          subheading: 'Formação Histórica das Comunidades Quilombolas no Maranhão',
          paragraphs: [
            'A introdução em massa de dezenas de milhares de escravizados africanos para sustentar o boom da lavoura arrozeira e algodoeira da Companhia Pombalina na virada para o século XIX provocou profundas transformações demográficas e espaciais. Em resposta à violência do cativeiro, negros escravizados organizaram fugas sistemáticas para os recônditos das florestas e margens dos rios, erguendo arraiais de refúgio e cooperação: os quilombos.',
            'Com a posterior crise do algodão ao longo do século XIX e o abandono de terras por grandes fazendeiros falidos, essas populações negras consolidaram sua ocupação permanente nas bacias dos rios Itapecuru e Mearim e na Baixada Maranhense. O Maranhão abriga hoje uma das maiores concentrações de remanescentes de quilombos do país (com centenas de comunidades certificadas pela Fundação Cultural Palmares).',
            'Essas comunidades forjaram matrizes culturais fundamentais da identidade maranhense, a exemplo das manifestações do Bumba-meu-boi, do Tambor de Crioula, dos terreiros de Tambor de Mina (com o culto aos encantados e caboclos) e da economia extrativista das quebradeiras de coco babaçu e coleta de juçara (açaí). O direito à titularização de suas terras ancestrais foi consagrado no art. 68 do ADCT da Carta Magna de 1988.'
          ],
          callouts: [
            {
              type: 'atencao',
              title: 'Origem dos Quilombos',
              content:
                'Os quilombos maranhenses são fruto exclusivo de lutas constantes de resistência escrava e posse de terras contra a opressão senhorial, e NÃO decorrem de "políticas de assistência ou concessões agrárias" da monarquia imperial.'
            }
          ]
        }
      ]
    }
  ],
  quickReview: [
    {
      title: '1. Ocupação Pré-Colonial e Nativos',
      keyPoints: [
        'Cerca de 250 mil índios e 30 etnias no séc. XVII;',
        'Economia de caça, coleta e agricultura em equilíbrio sustentável;',
        'Enorme declínio populacional por armas de fogo e contágio viral (varíola e gripe);',
        'Sobreviventes históricos: Krikati, Canela, Guajajara-tenetehara, Kaàpor, Awa Guajá e Gavião.'
      ],
      cebraspeAlert:
        'Não caia no erro de considerar que a redução demográfica nativa foi pacífica ou que os indígenas foram transferidos deliberadamente para a Amazônia de modo passivo.'
    },
    {
      title: '2. Capitanias Hereditárias e Nazareth (1534-1540)',
      keyPoints: [
        '1534: Sistema implantado por D. João III (15 donatários até Tordesilhas);',
        'Fracasso geral, exceto São Vicente e Pernambuco;',
        'Capitania do Maranhão dividida em duas, sem ocupação efetiva;',
        '1540: Expedição de Ayres da Cunha (donataria de João de Barros) naufraga; sobreviventes fundam a vila de Nazareth na foz de Mearim, Munim e Itapecuru.'
      ],
      cebraspeAlert:
        'A capitania do Maranhão inicial fracassou e não prosperou economicamente no século XVI.'
    },
    {
      title: '3. França Equinocial (1612-1615)',
      keyPoints: [
        'Daniel de La Touche (La Ravardière) aporta em Upaon-mirim em 26/07/1612;',
        'Primeira missa capuchinha em 12/08/1612 (relato de Claude d’Abbeville);',
        '8 de setembro de 1612: Fundação do Fort Saint Louis (homenagem a Luís XIII);',
        'Aliança com os Tupinambás; embaixadores levados a Paris;',
        'Rendição em 1615 mediante indenização; ausência de vestígios arquitetônicos franceses duradouros.'
      ],
      cebraspeAlert:
        'São Luís foi fundada por franceses, mas não preservou edificações nem instituições francesas coloniais permanentes.'
    },
    {
      title: '4. Batalha de Guaxenduba (1614)',
      keyPoints: [
        '19 de novembro de 1614 (perto de Icatu-MA);',
        'Luso-espanhóis + Tabajaras vs Franceses + Tupinambás;',
        'Jerônimo de Albuquerque Maranhão (fundador de Natal e nascido no Brasil);',
        'Ultimato de 4 horas de La Ravardière aproveitado pelos lusitanos para ataque surpresa;',
        'Milagre da Virgem (Nossa Senhora da Vitória transformando terra em pólvora);',
        'Expulsão em 04/11/1615 viabiliza a soberania portuguesa sobre a bacia Amazônica.'
      ],
      cebraspeAlert:
        'Atenção às forças aliadas: Tabajaras com portugueses, Tupinambás com franceses.'
    },
    {
      title: '5. Militarização do Norte e Drogas do Sertão',
      keyPoints: [
        '1616: Forte do Presépio (Belém); 1669: Forte de São José do Rio Negro (Manaus);',
        '1623: Tomada dos fortes holandeses Orange e Nassau no Xingu;',
        'Drogas do Sertão: anil, guaraná, salsa, pau-cravo, pequi, baunilha, etc.;',
        'Base de exploração: trabalho indígena (extrativismo florestal);',
        'Invasão holandesa no Maranhão repelida em 1644 por Antônio Teixeira de Melo.'
      ],
      cebraspeAlert:
        'O extrativismo das drogas do sertão amazônicas dependeu fundamentalmente da mão de obra indígena, e não da escravidão africana.'
    },
    {
      title: '6. Estado do Maranhão (1621) e Evolução',
      keyPoints: [
        'Criado em 13 de junho de 1621 por Filipe III (União Ibérica);',
        'Sede em São Luís, abarcando Grão-Pará, Maranhão e Ceará (autônomo frente a Salvador);',
        '1737: Mudança da capital para Santa Maria de Belém do Grão-Pará;',
        'Economia do séc. XVII: engenhos no Itapecuru, gado e algodão como moeda.'
      ],
      cebraspeAlert:
        'O Estado do Maranhão respondia diretamente a Lisboa e não recebia ordens da administração do Estado do Brasil (Salvador).'
    },
    {
      title: '7. Revolta de Beckman (1684-1685)',
      keyPoints: [
        'Causa: monopólio (estanco) e abusos da Companhia de Comércio do Maranhão (1682);',
        'Falta de escravos africanos e veto dos jesuítas à escravização de índios;',
        '24/02/1684: Invasão de depósitos, expulsão dos jesuítas e tomada de São Luís pelos irmãos Beckman;',
        'Repressão por Gomes Freire de Andrade (1685);',
        'Sentenças: Manuel Beckman (enforcado), Tomás Beckman (degredado), outros (prisão perpétua).'
      ],
      cebraspeAlert:
        'Não confunda o destino dos irmãos: Manuel foi condenado à forca; Tomás foi degredado.'
    },
    {
      title: '8. Era Pombalina e Quilombos Maranhenses',
      keyPoints: [
        'Marquês de Pombal (1750-1777), Despotismo Esclarecido;',
        '1755: Companhia de Comércio do Grão-Pará e Maranhão (boom de arroz e algodão);',
        'Diretório dos Índios (1755/1757) laiciza aldeamentos; jesuítas expulsos em 1759;',
        'Quilombos formados pela resistência de africanos trazidos no ciclo algodoeiro;',
        'Concentração na Baixada Maranhense e vales do Itapecuru/Mearim; proteção no art. 68 ADCT.'
      ],
      cebraspeAlert:
        'Diferencie a Companhia de 1682 (que gerou a revolta de Beckman) da Companhia de 1755 (que gerou o apogeu pombalino do algodão).'
    }
  ],
  questions: [
    {
      id: 1,
      blockId: 1,
      topic: 'Período Pré-Colonial e Primeiros Habitantes',
      subtopic: 'Modo de vida indígena e contato europeu',
      command:
        'A respeito das populações indígenas e do período pré-colonial no território maranhense, julgue o item a seguir.',
      statement:
        'Antes da chegada dos colonizadores europeus, as populações indígenas que ocupavam a área correspondente ao Maranhão estruturavam sua subsistência em atividades agrícolas, de caça e de coleta adaptadas aos ecossistemas litorâneos e florestais, tendo o posterior contato com os europeus provocado grande mortandade em decorrência de enfermidades exógenas como varíola e gripe.',
      correctAnswer: 'CERTO',
      explanation:
        'O item reproduz fidedignamente o conteúdo histórico da Aula 04. No período pré-colonial, as etnias indígenas maranhenses viviam em aldeias dispersas, combinando caça, coleta e técnicas agrícolas. A chegada dos exploradores europeus desencadeou graves epidemias infectocontagiosas (notadamente varíola e gripe), dizimando aldeamentos que não dispunham de defesas imunológicas.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '01',
        blockTitle: 'Período Pré-Colonial e Primeiros Habitantes',
        lessonPage: 'Aula 04, págs. 3 e 4'
      }
    },
    {
      id: 2,
      blockId: 1,
      topic: 'Período Pré-Colonial e Primeiros Habitantes',
      subtopic: 'Demografia e sobrevivência étnica',
      command:
        'No que se refere à presença demográfica indígena histórica e contemporânea no Maranhão, julgue o próximo item.',
      statement:
        'Dos aproximadamente 250 mil indígenas pertencentes a cerca de trinta etnias registrados no território maranhense no século XVII, todas as etnias originárias foram completamente extintas até o início do século XX em face dos conflitos coloniais e da exploração econômica.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'A afirmação de que "todas as etnias originárias foram completamente extintas".',
      correctedStatement:
        'Embora tenha ocorrido severo recuo populacional, diversas etnias indígenas originárias conseguiram resistir e sobrevivem na atualidade no Maranhão, como os Krikati, Canela, Guajajara-tenetehara, Kaàpor, Awa Guajá e Gavião.',
      trapDna: 'Generalização indevida / Negação de exceção explícita no texto.',
      explanation:
        'O item está ERRADO porque a fonte didática assevera expressamente que, daquelas cerca de 30 etnias setecentistas, somente algumas sobrevivem atualmente, citando nominalmente os Krikati, Canela, Guajajara-tenetehara, Kaàpor, Awa Guajá e Gavião. A assertiva peca pela generalização absoluta ao decretar a extinção total dos povos originários.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '01',
        blockTitle: 'Período Pré-Colonial e Primeiros Habitantes',
        lessonPage: 'Aula 04, pág. 4'
      }
    },
    {
      id: 3,
      blockId: 2,
      topic: 'Primeiras Tentativas e as Capitanias Hereditárias (1534-1540)',
      topicTag: 'Capitanias Hereditárias',
      subtopic: 'Ocupação efetiva da Capitania do Maranhão',
      command:
        'Considerando o processo inicial de colonização lusitana e a divisão do território em Capitanias Hereditárias, julgue o item subsequente.',
      statement:
        'A capitania do Maranhão, estabelecida na partilha territorial de 1534 sob o reinado de D. João III e inicialmente dividida em duas porções, logrou imediato êxito econômico e colonização efetiva em virtude do massivo apoio financeiro régio dispensado aos seus donatários.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que a capitania do Maranhão "logrou imediato êxito econômico e colonização efetiva em virtude do massivo apoio financeiro régio".',
      correctedStatement:
        'A capitania do Maranhão, dividida em duas, não chegou a ser efetivamente ocupada nessa fase inicial; no conjunto do Brasil colonial, apenas as capitanias de São Vicente e Pernambuco prosperaram.',
      trapDna: 'Inversão do resultado histórico factual / Afirmação falsa sobre sucesso colonial.',
      explanation:
        'O item está ERRADO. Conforme explicitado no texto didático, o modelo de capitanias hereditárias fracassou quase integralmente na América Portuguesa — vingaram unicamente São Vicente e Pernambuco. Os donatários enfrentaram escassez de recursos, isolamento de Portugal e ataques indígenas. No caso específico do Maranhão, a capitania foi dividida em duas e não chegou a ser efetivamente ocupada naquela etapa.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '02',
        blockTitle: 'Primeiras Tentativas e as Capitanias Hereditárias',
        lessonPage: 'Aula 04, pág. 5'
      }
    },
    {
      id: 4,
      blockId: 2,
      topic: 'Primeiras Tentativas e as Capitanias Hereditárias (1534-1540)',
      subtopic: 'Expedição de Ayres da Cunha e a Vila de Nazareth',
      command:
        'Acerca das primeiras expedições de reconhecimento e povoamento da costa maranhense no século XVI, julgue o item que se segue.',
      statement:
        'A expedição organizada em 1540 a partir de Lisboa pelo português Ayres da Cunha, com a finalidade de desenvolver a capitania concedida a João de Barros, naufragou nas proximidades da costa maranhense, cabendo aos sobreviventes alcançar a grande ilha localizada na confluência dos rios Mearim, Munim e Itapecuru, onde fundaram a vila de Nazareth.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está rigorosamente CERTO. O relato histórico resgatado do próprio capitão donatário João de Barros comprova que a frota de Ayres da Cunha (1540) soçobrou logo na chegada à costa maranhense; os náufragos conseguiram atingir a ilha situada no estuário confluente de três grandes cursos d’água (Mearim, Munim e Itapecuru) e ergueram a povoação de Nazareth.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '02',
        blockTitle: 'Primeiras Tentativas e as Capitanias Hereditárias',
        lessonPage: 'Aula 04, págs. 5 e 6'
      }
    },
    {
      id: 5,
      blockId: 3,
      topic: 'Daniel de La Touche e a França Equinocial (1612-1615)',
      subtopic: 'Aporte francês e ilha de Upaon-mirim',
      command:
        'A respeito dos passos inaugurais da expedição da França Equinocial liderada por Daniel de La Touche, julgue o item a seguir.',
      statement:
        'Ao aportar na costa maranhense em julho de 1612, a esquadra de Daniel de La Touche desembarcou de imediato na ilha principal de Upaon-Açu, fundando no mesmo dia o Fort Saint Louis sem que houvesse reconhecimento preliminar do território ou contato prévio com as lideranças indígenas locais.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que desembarcou de imediato em Upaon-Açu e fundou o forte no mesmo dia, sem reconhecimento preliminar ou contato prévio.',
      correctedStatement:
        'Os franceses aportaram primeiramente em 26 de julho de 1612 na ilha desabitada de Upaon-mirim ("ilha pequena"), enviando o senhor Des Vaux à Ilha Grande (Upaon-Açu) para averiguar a receptividade dos nativos; a primeira missa foi rezada em 12 de agosto e a fundação formal do Forte de São Luís ocorreu em 8 de setembro de 1612.',
      trapDna: 'Supressão de etapas procedimentais e inversão topográfica entre Upaon-mirim e Upaon-Açu.',
      explanation:
        'O item está ERRADO. A esquadra francesa aportou primeiro na ilha desabitada de Upaon-mirim (a 12 léguas da Ilha Grande). Daniel de La Touche enviou Des Vaux em expedição precursora para averiguar a recepção na Ilha Grande (Upaon-Açu), a qual foi acolhedora graças à presença de náufragos franceses (Gérard e Du Manoir) e contatos anteriores. A fundação do Fort Saint Louis ocorreu somente em 8 de setembro de 1612, após a celebração da missa capuchinha em 12 de agosto.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '03',
        blockTitle: 'Daniel de La Touche e a França Equinocial',
        lessonPage: 'Aula 04, págs. 6 e 7'
      }
    },
    {
      id: 6,
      blockId: 3,
      topic: 'Daniel de La Touche e a França Equinocial (1612-1615)',
      subtopic: 'Alianças militares e indígenas Tupinambás',
      command:
        'Com relação às estratégias geopolíticas e alianças étnicas desenvolvidas durante o período da França Equinocial, julgue o próximo item.',
      statement:
        'Para sustentar sua permanência colonial frente à oposição luso-espanhola, a liderança francesa formalizou aliança com os índios Tupinambás, guerreiros que rivalizavam com os Tupiniquins e para os quais a prática da antropofagia e a beligerância constituíam expedientes rituais de afirmação de poder e pactuação política.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está CERTO. O texto-base destaca textualmente que os franceses buscaram reforços com os índios Tupinambás na luta contra os portugueses. Esses indígenas guerreavam contra outros povos (em especial os Tupiniquins), eram antropófagos e utilizavam tanto os conflitos bélicos quanto a antropofagia como instrumentos estratégicos para demonstrar poder e celebrar alianças.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '03',
        blockTitle: 'Daniel de La Touche e a França Equinocial',
        lessonPage: 'Aula 04, pág. 7'
      }
    },
    {
      id: 7,
      blockId: 3,
      topic: 'Daniel de La Touche e a França Equinocial (1612-1615)',
      subtopic: 'Embaixadores indígenas em Paris',
      command:
        'No que se refere à dimensão diplomática da presença francesa no Maranhão colonial, julgue o item seguinte.',
      statement:
        'Com o intuito de consolidar a cooperação com os povos nativos e evidenciar perante a monarquia francesa a prosperidade do projeto colonizador na América, embaixadores indígenas tupinambás foram conduzidos à corte de Luís XIII em Paris, tendo alguns deles sucumbido a enfermidades em território europeu.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está CERTO. Documentos de Claude d’Abbeville registram a viagem de seis tupinambás a Paris entre 1613 e 1614 para consolidar a aliança e demonstrar a viabilidade da colônia. Três desses indígenas faleceram na França por complicações de saúde decorrentes do frio extremo e foram sepultados em convento parisiense após batismo cristão.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '03',
        blockTitle: 'Daniel de La Touche e a França Equinocial',
        lessonPage: 'Aula 04, págs. 7 e 8'
      }
    },
    {
      id: 8,
      blockId: 3,
      topic: 'Daniel de La Touche e a França Equinocial (1612-1615)',
      subtopic: 'Legado arquitetônico e imaginário historiográfico',
      command:
        'Acerca do legado material e do encerramento da experiência colonizadora francesa em São Luís, julgue o item subsecutivo.',
      statement:
        'Não obstante a derrota militar e a rendição francesa pactuada em 1615, a presença da França Equinocial legou à capital maranhense um vasto patrimônio arquitetônico fortificado e profundas raízes confessionais protestantes que nortearam a evolução sociocultural do estado.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que a França Equinocial legou "um vasto patrimônio arquitetônico fortificado e profundas raízes confessionais protestantes duradouras".',
      correctedStatement:
        'Apesar da construção posterior de um imaginário sobre a fundação francesa no século XX, não restaram edificações físicas nem influências culturais duradouras deixadas pelos franceses em São Luís.',
      trapDna: 'Troca de fato histórico comprovado por mito/imaginário cultural posterior.',
      explanation:
        'O item está ERRADO. Conforme salientado na literatura da aula (pág. 6), embora a narrativa da fundação francesa tenha sustentado um discurso de singularidade para o Maranhão no século XX, "não ficaram edificações nem influências culturais" perceptíveis daquela efêmera ocupação de três anos. A arquitetura colonial civil de São Luís preservada até hoje decorre dos ciclos econômicos portugueses posteriores.',
      cognitiveLevel: 'Nível 3 — Análise Crítica e Inferência',
      sourceReference: {
        blockNumber: '03',
        blockTitle: 'Daniel de La Touche e a França Equinocial',
        lessonPage: 'Aula 04, pág. 6'
      }
    },
    {
      id: 9,
      blockId: 4,
      topic: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola (1614-1615)',
      topicTag: 'Batalha de Guaxenduba',
      subtopic: 'Composição das forças beligerantes',
      command:
        'Em relação aos confrontos militares que definiram a soberania da costa norte colonial, julgue o item a seguir.',
      statement:
        'Travada em 19 de novembro de 1614 próximo à atual cidade de Icatu, a Batalha de Guaxenduba colocou em combate tropas portuguesas aliadas aos indígenas Tabajaras contra forças francesas coligadas aos guerreiros Tupinambás, constituindo passo determinante para a subsequente expulsão dos invasores gauleses.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está CERTO. O confronto em Guaxenduba (19/11/1614, perto de Icatu) envolveu forças luso-ibéricas coligadas aos Tabajaras de um lado e forças francesas amparadas pelos Tupinambás de outro, culminando na vitória decisiva que preparou a capitulação definitiva dos franceses em novembro de 1615.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '04',
        blockTitle: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola',
        lessonPage: 'Aula 04, págs. 9 e 22'
      }
    },
    {
      id: 10,
      blockId: 4,
      topic: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola (1614-1615)',
      subtopic: 'Estratégia militar e ultimato de 4 horas',
      command:
        'Acerca dos desdobramentos operacionais e da liderança militar durante a Batalha de Guaxenduba, julgue o próximo item.',
      statement:
        'Na condução da peleja em Guaxenduba, as forças francesas capitularam de pronto após receberem um ultimato de quatro horas emitido por Jerônimo de Albuquerque, que ameaçou passar as fortificações inimigas ao fio da espada caso La Ravardière não se rendesse no prazo assinalado.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Inversão da autoria do ultimato e da reação militar das tropas.',
      correctedStatement:
        'Foi o comandante francês La Ravardière quem enviou uma intimação a Jerônimo de Albuquerque concedendo quatro horas para a rendição portuguesa; os oficiais lusitanos utilizaram esse tempo hábil para desferir um ataque surpresa planejado que desmantelou o exército francês.',
      trapDna: 'Inversão de sujeitos e de iniciativa estratégica.',
      explanation:
        'O item está ERRADO. Foi La Ravardière (o comandante francês) quem enviou um ultimato a Jerônimo de Albuquerque estipulando um prazo de quatro horas para a rendição lusa. Jerônimo de Albuquerque e Diogo de Campos perceberam que esse prazo era exatamente a brecha necessária para consolidar posições e ordenaram um ataque de surpresa que infligiu duras baixas aos franceses.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '04',
        blockTitle: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola',
        lessonPage: 'Aula 04, pág. 9'
      }
    },
    {
      id: 11,
      blockId: 4,
      topic: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola (1614-1615)',
      subtopic: 'Jerônimo de Albuquerque Maranhão',
      command:
        'No que concerne ao perfil histórico e às distinções concedidas a Jerônimo de Albuquerque Maranhão, julgue o item subsequente.',
      statement:
        'Nascido no Brasil colonial e fundador da atual capital potiguar (Natal), Jerônimo de Albuquerque consagrou-se como o primeiro brasileiro a comandar uma força naval para defender o território colonial, tendo recebido do rei Filipe III de Espanha a mercê de incorporar o sobrenome "Maranhão" pela expulsão dos franceses.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está CERTO. Fiel à Aula 04 (págs. 9 e 31), Jerônimo de Albuquerque (1548-1618) nasceu na colônia brasileira, fundou a cidade de Natal/RN, chefiou forças navais lusas e foi agraciado pelo monarca hispânico Filipe III (no quadro da União Ibérica) com o honroso patronímico "Maranhão" por sua vitória contra os invasores franceses.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '04',
        blockTitle: 'A Batalha de Guaxenduba e a Retomada Luso-Espanhola',
        lessonPage: 'Aula 04, págs. 9 e 31'
      }
    },
    {
      id: 12,
      blockId: 5,
      topic: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
      topicTag: 'Militarização e Fortificações',
      subtopic: 'Fundação do Forte do Presépio em Belém',
      command:
        'A respeito da interiorização militar e da salvaguarda da foz amazônica pela Coroa portuguesa no início do século XVII, julgue o item que se segue.',
      statement:
        'Como reflexo imediato da expulsão dos franceses do Maranhão em 1615, a Coroa lusitana promoveu no ano seguinte (1616) a ereção do Forte do Presépio em Santa Maria de Belém do Grão-Pará, edificação militar pioneira voltada a barrar intrusões de potências concorrentes no estuário amazônico.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está rigorosamente CERTO. O documento-fonte aponta expressamente que o término da ocupação francesa em 1615 gerou repercussão estratégica imediata, levando à fundação, em 1616, do Forte do Presépio na capitania do Grão-Pará (origem de Belém), constituindo a primeira e mais relevante fortificação portuguesa na Amazônia setentrional.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '05',
        blockTitle: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
        lessonPage: 'Aula 04, pág. 10'
      }
    },
    {
      id: 13,
      blockId: 5,
      topic: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
      subtopic: 'Fortes de Orange e Nassau no rio Xingu',
      command:
        'Considerando as disputas geopolíticas travadas entre potências europeias pelo Vale Amazônico no século XVII, julgue o próximo item.',
      statement:
        'Os fortes de Orange e Nassau, estabelecidos nas margens do rio Xingu em 1599, foram erguidos originalmente pela Coroa portuguesa com o escopo de conter a infiltração de contrabandistas holandeses e ingleses no circuito das drogas do sertão.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Atribuição da construção dos fortes Orange e Nassau à Coroa portuguesa.',
      correctedStatement:
        'Os fortes de Orange e Nassau foram erguidos em 1599 pelos holandeses; somente em 1623 o governador português de Belém tomou essas posições ao derrotar forças combinadas de holandeses, ingleses e franceses.',
      trapDna: 'Troca de nacionalidade e autoria da construção militar.',
      explanation:
        'O item está ERRADO. Os fortes Orange e Nassau não foram construídos pelos portugueses, mas sim pelos holandeses que navegaram pelo rio Amazonas em 1599 e se fixaram no rio Xingu. Foi a investida militar das tropas do governador de Belém em 1623 que expulsou os holandeses e tomou essas praças.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '05',
        blockTitle: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
        lessonPage: 'Aula 04, pág. 10'
      }
    },
    {
      id: 14,
      blockId: 5,
      topic: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
      subtopic: 'Extrativismo florestal e mão de obra',
      command:
        'No que se refere à economia colonial amazônica e maranhense seiscentista, julgue o item subsecutivo.',
      statement:
        'A exploração das chamadas drogas do sertão — que compreendia itens florestais como anil, pau-cravo, salsa, baunilha e castanha-do-pará — prescindiu da utilização de trabalhadores nativos em decorrência da imediata e maciça oferta de mão de obra escrava africana provida pelo tráfico negreiro no início do século XVII.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que a exploração "prescindiu da utilização de trabalhadores nativos" e que contou com "imediata e maciça oferta de escravos africanos".',
      correctedStatement:
        'A base econômica extrativista amazônica consistiu essencialmente na exploração florestal com o emprego compulsório ou tutelado da mão de obra indígena, persistindo extrema escassez de escravizados africanos no século XVII.',
      trapDna: 'Negação do elemento central de sustentação econômica / Inversão cronológica e social.',
      explanation:
        'O item está ERRADO. A economia extrativista das drogas do sertão no Norte colonial dependeu intensamente do trabalho indígena, escravizado ou arregimentado em missões religiosas. A introdução substancial de escravizados africanos no Maranhão foi um processo tardio, intensificado apenas a partir de fins do século XVIII com as companhias de comércio e as lavouras de algodão.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '05',
        blockTitle: 'Militarização Portuguesa do Norte e as Drogas do Sertão',
        lessonPage: 'Aula 04, pág. 10'
      }
    },
    {
      id: 15,
      blockId: 6,
      topic: 'O Estado do Maranhão e Grão-Pará: Organização Administrativa',
      topicTag: 'Estado do Maranhão (1621)',
      subtopic: 'Criação e autonomia administrativa',
      command:
        'A respeito da evolução administrativa da América Portuguesa no século XVII, julgue o item a seguir.',
      statement:
        'Criado em 13 de junho de 1621 por ordem do rei Filipe III sob a União Ibérica, o Estado do Maranhão teve sede fixada em São Luís e congregou as capitanias do Maranhão, do Grão-Pará e do Ceará, constituindo unidade administrativa autônoma e desvinculada da jurisdição do Estado do Brasil sediado em Salvador.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está rigorosamente CERTO. Em 13 de junho de 1621, Filipe III criou o Estado do Maranhão para assegurar o domínio da costa norte e superar as dificuldades de conexão marítima com o sul. A entidade possuía capital em São Luís, abrangia Grão-Pará, Maranhão e Ceará e respondia diretamente a Lisboa, sem subordinação ao Estado do Brasil.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '06',
        blockTitle: 'O Estado do Maranhão e Grão-Pará',
        lessonPage: 'Aula 04, págs. 12 e 20'
      }
    },
    {
      id: 16,
      blockId: 8,
      topic: 'A Era Pombalina e as Comunidades Quilombolas no Maranhão',
      topicTag: 'Quilombos no Maranhão',
      subtopic: 'Origem histórica das comunidades quilombolas',
      command:
        'Considerando a gênese histórica das comunidades quilombolas no território maranhense, julgue o próximo item.',
      statement:
        'As expressivas comunidades quilombolas hoje existentes no Maranhão originaram-se de uma política de concessão de terras públicas promovida pelo governo imperial brasileiro no século XIX, que demarcou colônias rurais para acolher e integrar pacificamente os escravizados alforriados à sociedade de classes.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que os quilombos originaram-se de "uma política de concessão de terras públicas promovida pelo governo imperial para acolher escravizados alforriados".',
      correctedStatement:
        'Os quilombos maranhenses surgiram como núcleos autônomos de refúgio e resistência forjados pelos próprios africanos escravizados em fuga contra o regime escravocrata, cuja expansão esteve atrelada aos ciclos do algodão/arroz e ao posterior abandono de terras por fazendeiros.',
      trapDna: 'Inversão da natureza da instituição (concessão estatal benemérita vs resistência negra insurgente).',
      explanation:
        'O item está ERRADO. Conforme salientado nas questões da aula (págs. 28 e 35), os quilombos no Maranhão não decorreram de políticas sociais ou concessões da monarquia imperial, mas sim de lutas incansáveis dos escravizados por refúgio e autoafirmação territorial perante a opressão senhorial, intensificando-se com a expansão da lavoura de algodão e arroz no século XVIII.',
      cognitiveLevel: 'Nível 3 — Análise Crítica e Inferência',
      sourceReference: {
        blockNumber: '08',
        blockTitle: 'A Era Pombalina e as Comunidades Quilombolas',
        lessonPage: 'Aula 04, págs. 28 e 35'
      }
    },
    {
      id: 17,
      blockId: 7,
      topic: 'A Revolta de Beckman (1684-1685) e o Estanco Régio',
      topicTag: 'Revolta de Beckman',
      subtopic: 'Companhia de Comércio de 1682 e causas da insurreição',
      command:
        'No que se refere às motivações e aos desdobramentos da Revolta de Beckman em 1684, julgue o item subsequente.',
      statement:
        'A deflagração da Revolta de Beckman esteve umbilicalmente vinculada ao descontentamento de fazendeiros e comerciantes locais contra o estanco conferido à Companhia de Comércio do Estado do Maranhão em 1682, a qual impunha preços extorsivos na venda de produtos importados e falhara no compromisso de abastecer a capitania com quinhentos escravizados africanos anuais.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está integralmente CERTO. A insurreição de 1684 foi deflagrada contra a Companhia de Comércio de 1682 em decorrência do monopólio opressor (estanco), fornecimento de mercadorias ruins e caras e, crucialmente, pelo descumprimento da promessa de introduzir 500 escravos africanos ao ano, o que acirrava os atritos com os jesuítas em torno da escravidão nativa.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '07',
        blockTitle: 'A Revolta de Beckman e o Estanco Régio',
        lessonPage: 'Aula 04, págs. 15 e 23'
      }
    },
    {
      id: 18,
      blockId: 7,
      topic: 'A Revolta de Beckman (1684-1685) e o Estanco Régio',
      subtopic: 'Penas aplicadas aos irmãos Beckman',
      command:
        'Acerca da restauração da ordem metropolitana e da sentença judicial proferida aos cabeças da Revolta de Beckman, julgue o item que se segue.',
      statement:
        'Ao reassumir o controle político de São Luís com a chegada do governador Gomes Freire de Andrade em 1685, a Coroa portuguesa cominou pena de morte na forca tanto a Manuel Beckman quanto a Tomás Beckman por crime de sedição armada contra os interesses do Real Erário.',
      correctAnswer: 'ERRADO',
      wrongPoint:
        'Afirmar que ambos os irmãos, Manuel e Tomás Beckman, foram condenados à pena de morte na forca.',
      correctedStatement:
        'Manuel Beckman foi executado por enforcamento, ao passo que Tomás Beckman foi punido com o degredo e a expulsão perpétua de sua terra natal.',
      trapDna: 'Uniformização indevida de penalidades / Troca entre sanção capital e degredo.',
      explanation:
        'O item está ERRADO. O documento-base discrimina expressamente as sanções impostas: Manuel Beckman foi executado na forca, enquanto Tomás Beckman foi sentenciado ao degredo e expulso da colônia; os demais implicados no levante receberam penas de prisão perpétua.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '07',
        blockTitle: 'A Revolta de Beckman e o Estanco Régio',
        lessonPage: 'Aula 04, págs. 15 e 24'
      }
    },
    {
      id: 19,
      blockId: 8,
      topic: 'A Era Pombalina e as Comunidades Quilombolas no Maranhão',
      topicTag: 'Era Pombalina',
      subtopic: 'Companhia Geral de Comércio de 1755 e monocultura',
      command:
        'Em relação às diretrizes econômicas mercantilistas preconizadas pelo Marquês de Pombal para a Amazônia e o Maranhão, julgue o próximo item.',
      statement:
        'Criada em 1755 sob a administração pombalina, a Companhia de Comércio do Grão-Pará e Maranhão dinamizou a economia nortista ao fomentar a atração de povoadores e o desenvolvimento intensivo das lavouras de exportação de arroz e algodão, vindo este último a consagrar-se como expressivo gênero da pauta comercial metropolitana.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está plenamente CERTO. Pombal fundou a Companhia em 1755 para impulsionar o Norte no contexto do declínio da mineração no Sudeste. A empresa promoveu a imigração nordestina e disseminou o cultivo de arroz e algodão, permitindo que o algodão maranhense atingisse o ápice das exportações do Império e propiciasse a construção dos imponentes casarões de São Luís.',
      cognitiveLevel: 'Nível 1 — Domínio Conceitual',
      sourceReference: {
        blockNumber: '08',
        blockTitle: 'A Era Pombalina e as Comunidades Quilombolas',
        lessonPage: 'Aula 04, págs. 16, 21 e 24'
      }
    },
    {
      id: 20,
      blockId: 8,
      topic: 'A Era Pombalina e as Comunidades Quilombolas no Maranhão',
      topicTag: 'Diretório dos Índios e Jesuítas',
      subtopic: 'Laicização dos aldeamentos e expulsão inaciana',
      command:
        'No que se refere à política indigenista e religiosa implementada no período pombalino, julgue o item subsecutivo.',
      statement:
        'Por meio do Diretório dos Índios, implementado na década de 1750 no Estado do Maranhão e Grão-Pará, a tutela administrativa dos aldeamentos nativos foi transferida para agentes públicos seculares em detrimento das ordens religiosas, política de laicização institucionalizada pela subsequente expulsão dos Jesuítas da colônia em 1759.',
      correctAnswer: 'CERTO',
      explanation:
        'O item está CERTO. O Diretório dos Índios (lei de 1755 implementada em 1757) elevou aldeamentos à condição de vilas ou aldeias laicas geridas por diretores estatais civis, retirando o poder temporal das ordens religiosas. Em 1759, Pombal completou esse movimento centralizador expulsando a Companhia de Jesus e confiscando seus bens patrimoniais na América portuguesa.',
      cognitiveLevel: 'Nível 2 — Relação entre Regras e Condições',
      sourceReference: {
        blockNumber: '08',
        blockTitle: 'A Era Pombalina e as Comunidades Quilombolas',
        lessonPage: 'Aula 04, pág. 16'
      }
    }
  ]
};

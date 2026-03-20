// ============================================================
// admin-i18n.js — Sistema de Tradução do Painel Admin
// Idiomas suportados: pt (Português BR) | es (Español PY)
// Uso:
//   HTML estático: <span data-i18n="sidebar.pedidos">Pedidos</span>
//   JS dinâmico:   t('alerts.saved')  →  "Salvo!" / "¡Guardado!"
// ============================================================

const ADMIN_LANGS = {

  // ══════════════════════════════════════════════════════════
  // PORTUGUÊS (padrão)
  // ══════════════════════════════════════════════════════════
  pt: {
    // ── Sidebar ────────────────────────────────────────────
    'sidebar.visao':        'Visão',
    'sidebar.pdv':          'PDV Balcão',
    'sidebar.pedidos':      'Pedidos',
    'sidebar.cozinha':      'Cozinha',
    'sidebar.equipe':       'Equipe',
    'sidebar.financeiro':   'Financeiro',
    'sidebar.config':       'Config',
    'sidebar.master':       'Master',
    'sidebar.estoque':      'Estoque',
    'sidebar.turnos':       'Turnos 📺',
    'sidebar.sair':         'Sair',

    // ── Dashboard ──────────────────────────────────────────
    'dash.title':           'Painel de Controle',
    'dash.vendas_hoje':     'Vendas Hoje',
    'dash.pedidos_hoje':    'Pedidos Hoje',
    'dash.custo_moto':      'Custo Entregas',
    'dash.em_preparo':      'Em Preparo',
    'dash.top_produtos':    'Top Produtos',
    'dash.clientes':        'Clientes Assíduos',
    'dash.periodo':         'Período',
    'dash.hoje':            'Hoje',
    'dash.7dias':           '7 dias',
    'dash.30dias':          '30 dias',
    'dash.mes':             'Este mês',
    'dash.personalizado':   'Personalizado',
    'dash.nenhuma_venda':   'Nenhuma venda no período',

    // ── Pedidos ────────────────────────────────────────────
    'pedidos.title':        'Pedidos',
    'pedidos.cliente':      'Cliente',
    'pedidos.status':       'Status',
    'pedidos.total':        'Total',
    'pedidos.acoes':        'Ações',
    'pedidos.nenhum':       'Nenhum pedido ativo.',
    'pedidos.cozinha':      '🔥 Cozinha',
    'pedidos.confirmar':    '✅ Confirmar',
    'pedidos.imprimir':     'Imprimir',
    'pedidos.cancelar':     'Cancelar',
    'pedidos.solicitar_cancel': '🚫 Solicitar Cancelamento',
    'pedidos.aprovar':      '✅ Aprovar',
    'pedidos.negar':        '❌ Negar',
    'pedidos.avisar':       'Avisar Cliente',
    'pedidos.rota':         '🛵 Enviar Rota',
    'pedidos.sel_motoboy':  'Selecione o motoboy...',
    'pedidos.auto_confirm': '⏰ Auto-confirmado (4h)',

    // ── Status badges ──────────────────────────────────────
    'status.pendente':        'PENDENTE',
    'status.em_preparo':      'EM PREPARO',
    'status.pronto_entrega':  'PRONTO',
    'status.saiu_entrega':    'SAIU',
    'status.entregue':        'ENTREGUE',
    'status.cancelado':       'CANCELADO',

    // ── Cozinha (KDS) ──────────────────────────────────────
    'kds.title':            'Monitor de Cozinha (KDS)',
    'kds.livre':            '👨‍🍳 Cozinha Livre!',
    'kds.pronto':           '✅ PRONTO',
    'kds.min':              'min',

    // ── PDV ────────────────────────────────────────────────
    'pdv.title':            '🏪 Venda Balcão (PDV)',
    'pdv.buscar':           '🔍 Buscar produto...',
    'pdv.mesa_num':         'Nº',
    'pdv.mesa_nome':        'Nome',
    'pdv.telefone':         'Telefone',
    'pdv.tipo_pedido':      'Tipo de Pedido',
    'pdv.subtotal':         'Subtotal:',
    'pdv.desconto':         '🏷️ Desconto',
    'pdv.total':            'Total:',
    'pdv.lancar':           '✅ Lançar Pedido',
    'pdv.venda':            'Venda',
    'pdv.mesas':            'Mesas',
    'pdv.nenhuma_mesa':     'Nenhuma mesa ativa',
    'pdv.mesas_andamento':  'Pedidos em Andamento',
    'pdv.entregar':         'Entregar / Baixar',
    'pdv.na_cozinha':       '🔥 Na Cozinha',

    // ── Financeiro ─────────────────────────────────────────
    'fin.title':            '💰 Controle Financeiro',
    'fin.faturamento':      'Faturamento',
    'fin.custo_moto':       'Custo Entregas',
    'fin.lucro':            'Lucro Operacional',
    'fin.pedidos':          'Pedidos',
    'fin.ticket_medio':     'Ticket Médio',
    'fin.por_pagamento':    '💳 Por Forma de Pagamento',
    'fin.pix':              'Pix',
    'fin.transferencia':    'Transferência',
    'fin.cartao':           'Cartão',
    'fin.dinheiro':         'Dinheiro',
    'fin.motoboys':         '🏍️ Relatório Motoboys',
    'fin.filtrar':          'Filtrar',
    'fin.exportar_csv':     '📊 CSV / Power BI',
    'fin.exportar_pdf':     '📄 PDF',
    'fin.graficos':         '📈 Gráficos',
    'fin.fechar_caixa':     'Fechar Caixa',
    'fin.periodo_inicio':   'Início',
    'fin.periodo_fim':      'Fim',
    'fin.forma_pag':        'Forma de Pag.',
    'fin.todos':            'Todos',
    'fin.caixa_ctrl':       'Controle de Caixa',
    'fin.abertura':         '🟢 Abertura',
    'fin.suprimento':       '➕ Suprimento',
    'fin.sangria':          '💸 Sangria',
    'fin.despesa':          '🧾 Despesa',

    // ── Produtos ───────────────────────────────────────────
    'prod.title':           'Produtos',
    'prod.novo':            '+ Novo Produto',
    'prod.buscar':          '🔍 Buscar produto...',
    'prod.editar':          'Editar',
    'prod.pausar':          'Pausar',
    'prod.reativar':        'Reativar',
    'prod.excluir':         'Excluir',
    'prod.duplicar':        'Duplicar',
    'prod.nome':            'Nome',
    'prod.descricao':       'Descrição',
    'prod.preco':           'Preço base (Gs)',
    'prod.categoria':       'Categoria',
    'prod.subcategoria':    'Subcategoria',
    'prod.imagem':          'Imagem (Upload ou URL)',
    'prod.salvar':          'Salvar Produto',
    'prod.cancelar':        'Cancelar',
    'prod.tipo':            'Tipo de Produto',
    'prod.somente_balcao':  'Somente Balcão',
    'prod.extras':          'Tem adicionais?',
    'prod.estoque':         'Vincular ao estoque',

    // ── Categorias ─────────────────────────────────────────
    'cat.title':            '🏷️ Categorias do Cardápio',
    'cat.nova':             '+ Nova Categoria',
    'cat.nome':             'Nome Exibição',
    'cat.slug':             'Slug (ID único)',
    'cat.ordem':            'Ordem',
    'cat.horario':          'Horário (opcional)',
    'cat.salvar':           'Salvar',

    // ── Motoboys ───────────────────────────────────────────
    'moto.title':           'Equipe Motoboys',
    'moto.novo':            '+ Novo Motoboy',
    'moto.nome':            'Nome',
    'moto.telefone':        'Telefone (WhatsApp)',
    'moto.salvar':          'Salvar',

    // ── Equipe ─────────────────────────────────────────────
    'equipe.title':         'Gestão de Equipe',
    'equipe.nome':          'Nome',
    'equipe.email':         'Email',
    'equipe.cargo':         'Cargo',
    'equipe.desde':         'Desde',
    'equipe.acoes':         'Ações',
    'equipe.novo_usuario':  'Novo Usuário',
    'equipe.criar':         'Criar',
    'equipe.promover':      'Promover',
    'equipe.rebaixar':      'Rebaixar',
    'equipe.excluir':       'Excluir',

    // ── Configurações ──────────────────────────────────────
    'cfg.title':            '⚙️ Configurações',
    'cfg.identidade':       '🏪 Identidade da Loja',
    'cfg.nome_rest':        'Nome do Restaurante',
    'cfg.descricao':        'Descrição (tagline)',
    'cfg.url':              'URL do Site',
    'cfg.telefone':         'Telefone (exibição)',
    'cfg.whatsapp':         'WhatsApp para pedidos',
    'cfg.logo':             'Logo / Ícone',
    'cfg.salvar_id':        '💾 Salvar Identidade',
    'cfg.pagamento':        '💳 Dados de Pagamento',
    'cfg.chave_pix':        'Chave Pix',
    'cfg.nome_pix':         'Nome titular Pix',
    'cfg.alias':            'Número / Alias (PY)',
    'cfg.nome_alias':       'Nome titular Alias',
    'cfg.localizacao':      '📍 Localização',
    'cfg.lat':              'Latitude da Loja',
    'cfg.lng':              'Longitude da Loja',
    'cfg.operacao':         '🕐 Operação & Horários',
    'cfg.status_loja':      'Status Manual da Loja',
    'cfg.cotacao':          'Cotação Real (Gs/R$)',
    'cfg.salvar_loc':       '💾 Salvar Localização & Operação',
    'cfg.visual':           '🎨 Personalização Visual',
    'cfg.cor_primaria':     'Cor Principal (botões)',
    'cfg.icone_upload':     'Upload de Ícone',
    'cfg.salvar_visual':    '🎨 Salvar Personalização',
    'cfg.banners':          '🏷️ Banners Promocionais',
    'cfg.frete':            '🚗 Tabela de Frete',
    'cfg.limite_dist':      'Limite de distância (km)',
    'cfg.taxa_moto':        'Taxa base motoboy (Gs)',
    'cfg.salvar_frete':     '💾 Salvar Tabela de Frete',
    'cfg.cupons':           '🎟️ Gestão de Cupons',
    'cfg.novo_cupom':       '+ Novo Cupom',
    'cfg.extras_globais':   '➕ Adicionais Globais',

    // ── Estoque ────────────────────────────────────────────
    'estoque.title':        'Gestão de Estoque',
    'estoque.novo':         '+ Novo Item',
    'estoque.buscar':       '🔍 Buscar...',
    'estoque.todos':        'Todos',
    'estoque.ok':           'OK',
    'estoque.baixo':        'Baixo',
    'estoque.zerado':       'Zerado',
    'estoque.nome':         'Nome do Item',
    'estoque.qtd':          'Quantidade',
    'estoque.unidade':      'Unidade',
    'estoque.minimo':       'Qtd. Mínima',
    'estoque.obs':          'Observações',
    'estoque.salvar':       'Salvar',
    'estoque.ajuste':       'Ajuste de Estoque',
    'estoque.adicionar':    'Adicionar',
    'estoque.subtrair':     'Subtrair',
    'estoque.definir':      'Definir',
    'estoque.motivo':       'Motivo (opcional)',
    'estoque.confirmar':    'Confirmar Ajuste',

    // ── Alerts / Confirms ──────────────────────────────────
    'alert.salvo':               '✅ Salvo com sucesso!',
    'alert.erro':                '❌ Erro: ',
    'alert.confirmado':          '✅ Confirmado!',
    'alert.cancelado':           '✅ Pedido cancelado com sucesso!',
    'alert.cancel_enviado':      '✅ Solicitação enviada! O dono será notificado.',
    'alert.cancel_negado':       '✅ Solicitação de cancelamento negada.',
    'alert.produto_salvo':       '✅ Produto salvo com sucesso!',
    'alert.produto_pausado':     '⏸️ Produto pausado!',
    'alert.produto_reativado':   '✅ Produto reativado!',
    'alert.produto_duplicado':   '✅ Produto duplicado! A cópia foi criada pausada.',
    'alert.produto_excluido':    '✅ Produto deletado com sucesso!',
    'alert.cat_salva':           '✅ Categoria salva!',
    'alert.cat_excluida':        '✅ Categoria deletada!',
    'alert.moto_salvo':          '✅ Motoboy salvo com sucesso!',
    'alert.moto_excluido':       '✅ Motoboy deletado com sucesso!',
    'alert.cfg_salvas':          '✅ Configurações salvas com sucesso!',
    'alert.frete_salvo':         '✅ Tabela de frete salva!',
    'alert.cupom_salvo':         '✅ Cupom salvo com sucesso!',
    'alert.usuario_criado':      '✅ Usuário criado com sucesso!',
    'alert.cargo_alterado':      '✅ Cargo alterado!',
    'alert.acesso_negado':       'Acesso negado.',
    'alert.carrinho_vazio':      'Carrinho vazio!',
    'alert.sel_pedidos_moto':    'Selecione os pedidos e o motoboy!',
    'alert.features_salvas':     '✅ Features salvas!',
    'alert.caixa_reaberto':      '✅ Caixa reaberto!',
    'alert.operacao_registrada': '✅ Operação registrada!',
    'alert.delivery_encerrado':  '✅ Delivery encerrado!',
    'alert.delivery_reaberto':   '✅ Delivery reaberto com sucesso!',
    'alert.horario_estendido':   '✅ Horário estendido!',
    'alert.csv_exportado':       '✅ CSV exportado com sucesso!',

    'confirm.cancelar_pedido':   '⚠️ Confirma o CANCELAMENTO deste pedido?\nEsta ação não pode ser desfeita.',
    'confirm.excluir_produto':   '⚠️ Deletar este produto?\nEsta ação não pode ser desfeita.',
    'confirm.excluir_cat':       '⚠️ Deletar esta categoria?\nEsta ação não pode ser desfeita.',
    'confirm.excluir_moto':      '⚠️ Deletar este motoboy?\nEsta ação não pode ser desfeita.',
    'confirm.excluir_usuario':   '⚠️ Excluir este usuário?\nIsso remove apenas o perfil.',
    'confirm.fechar_caixa':      'Fechar o caixa de hoje?',
    'confirm.duplicar_produto':  'Duplicar este produto? Uma cópia será criada pausada.',
    'confirm.encerrar_delivery': 'Fechar o delivery agora?',
    'confirm.reabrir_delivery':  'Reabrir o delivery para novos pedidos?',
    'confirm.aprovar_cancel':    '⚠️ Confirma o CANCELAMENTO deste pedido?',
    'confirm.reabrir_caixa':     'Autorizar reabertura do caixa?',

    'prompt.motivo_cancel':      '🚫 Solicitar cancelamento\n\nInforme o motivo:',
    'prompt.negar_cancel':       'Motivo para NEGAR o cancelamento (opcional):',
    'prompt.motivo_ajuste':      'Motivo do ajuste (opcional):',

    // ── Cargos ─────────────────────────────────────────────
    'cargo.adminMaster':    '🔱 ADMIN MASTER',
    'cargo.dono':           '🔑 DONO',
    'cargo.gerente':        '👔 GERENTE',
    'cargo.funcionario':    '👷 FUNCIONÁRIO',
    'cargo.garcom':         '🍽️ GARÇOM',

    // ── Geral ──────────────────────────────────────────────
    'geral.salvar':         'Salvar',
    'geral.cancelar':       'Cancelar',
    'geral.editar':         'Editar',
    'geral.excluir':        'Excluir',
    'geral.novo':           'Novo',
    'geral.buscar':         'Buscar',
    'geral.filtrar':        'Filtrar',
    'geral.carregando':     'Carregando...',
    'geral.sem_dados':      'Nenhum dado encontrado.',
    'geral.aberto':         '🟢 Aberto',
    'geral.fechado':        '🔴 Fechado',
    'geral.sim':            'Sim',
    'geral.nao':            'Não',
    'geral.todos':          'Todos',
    'geral.hoje':           'Hoje',

    // ── Dias da semana ─────────────────────────────────────
    'dia.seg':              'Segunda-feira',
    'dia.ter':              'Terça-feira',
    'dia.qua':              'Quarta-feira',
    'dia.qui':              'Quinta-feira',
    'dia.sex':              'Sexta-feira',
    'dia.sab':              'Sábado',
    'dia.dom':              'Domingo',

    // ── Grade semanal de horários ──────────────────────────
    'cfg.horarios_titulo':  '📅 Horários por dia da semana',
    'cfg.horarios_sub':     'Cada dia pode ter até 2 turnos (ex: almoço + jantar).',
    'cfg.aplicar_todos':    'Aplicar a todos',
    'cfg.abertura_turno':   '🕐 Abertura',
    'cfg.segundo_turno':    '🕑 2º Turno',
    'cfg.das':              'Das',
    'cfg.ate':              'Até',
    'cfg.badge_aberto':     '🟢 Aberto',
    'cfg.badge_fechado':    '🔴 Fechado',
    'cfg.adicionar_turno':  'Adicionar 2º turno',
    'cfg.seguir_horario':   '🟢 Seguir horário semanal',
    'cfg.forcar_fechado':   '🔴 Forçar fechado',
    'cfg.maps_tip':         'Para encontrar as coordenadas: abra o Google Maps, clique com botão direito sobre o endereço da loja e copie as coordenadas.',
    'cfg.estender_btn':     '+Horário',
    'cfg.estender_title':   'Estender horário',

    // ── Dashboard extras ───────────────────────────────────
    'dash.a_pagar_moto':    'A Pagar Motoboys',
    'dash.clientes_top':    'Clientes Assíduos',
    'del.aberto_badge':     '🟢 Delivery Aberto',

    // ── Selects genéricos ──────────────────────────────────
    'sel.motoboy':          'Selecione Motoboy...',
    'sel.selecione':        'Selecione...',
    'sel.sem_categoria':    '— Sem categoria —',
    'sel.sem_subcategoria': '— Sem subcategoria —',

    // ── Banners ────────────────────────────────────────────
    'cfg.banner_sub':       'Ao clicar no banner o cliente abre o produto. Defina também o desconto aplicado automaticamente.',
    'cfg.id_produto':       'ID do Produto',
    'cfg.tipo_desconto':    'Tipo de Desconto',
    'cfg.valor_desconto':   'Valor do Desconto',
    'cfg.foto_banner':      'Foto do Banner',
    'cfg.salvar_banner1':   'Salvar Banner 1',
    'cfg.salvar_banner2':   'Salvar Banner 2',
    'cfg.desc_percentual':  '% Percentual',
    'cfg.desc_fixo':        'Gs Fixo',

    // ── Adicionais globais ─────────────────────────────────
    'cfg.adicionais_titulo':'Adicionais Globais',
    'cfg.adicionais_sub':   'Aparecem como opção extra no checkout. Escolha em quais categorias serão exibidos.',
    'cfg.exibir_cats':      '📂 Exibir nas categorias:',
    'cfg.cats_sub':         'Se nenhuma estiver marcada, aparece em todas.',
    'cfg.adicionar_adicional':'+ Adicionar Adicional',
    'cfg.salvar_adicionais':'Salvar Adicionais Globais',

    // ── Cupons (headers tabela) ────────────────────────────
    'cfg.gestao_cupons':    'Gestão de Cupons de Desconto',
    'cfg.col_codigo':       'Código',
    'cfg.col_tipo':         'Tipo',
    'cfg.col_valor':        'Valor',
    'cfg.col_minimo':       'Mínimo',
    'cfg.col_usos':         'Usos / Limite',
    'cfg.col_validade':     'Validade',
    'cfg.col_status':       'Status',
    'cfg.col_acoes':        'Ações',

    // ── Modal cupom ────────────────────────────────────────
    'cfg.cupom_gerenciar':  'Gerenciar Cupom',
    'cfg.cupom_codigo_lbl': 'Código do Cupom',
    'cfg.cupom_tipo_lbl':   'Tipo de Desconto',
    'cfg.cupom_percentual': 'Desconto Percentual (%)',
    'cfg.cupom_frete':      'Frete Grátis',
    'cfg.cupom_valor_lbl':  'Valor do Desconto (%)',
    'cfg.cupom_minimo_lbl': 'Valor Mínimo do Pedido (Gs)',
    'cfg.cupom_limite_lbl': 'Limite de Usos',
    'cfg.cupom_ilimitado':  '(0 = ilimitado)',
    'cfg.cupom_validade_lbl':'Validade',
    'cfg.cupom_opcional':   '(opcional)',
    'cfg.cupom_ativo_lbl':  'Cupom Ativo',
    'cfg.cupom_ativo_sub':  'Desmarque para desativar temporariamente',
    'cfg.salvar_cupom':     'Salvar Cupom',

    // ── Tabela de frete extras ─────────────────────────────
    'cfg.frete_km_titulo':  'Tabela de Frete por KM',
    'cfg.frete_km_sub':     'Defina o valor cobrado ao cliente e o repasse ao motoboy. Marque "Combinar" para desabilitar uma faixa.',
    'cfg.limite_entrega':   '🛑 Limite de entrega:',
    'cfg.sem_limite':       'Sem limite',
    'cfg.km_vazio':         'km (deixar vazio = sem limite)',
    'cfg.col_faixa':        'Faixa',
    'cfg.col_cliente_gs':   '💰 Cliente (Gs)',
    'cfg.col_motoboy_gs':   '🛵 Motoboy (Gs)',
    'cfg.col_combinar':     'Combinar',
    'cfg.acima_20km':       'Acima de 20 km',
    'cfg.a_combinar':       '🤝 A Combinar',
    'cfg.custos_moto':      '⛽ Custos do Motoboy',
    'cfg.combustivel':      'Combustível/dia (Gs)',
    'cfg.taxa_base':        'Taxa base/entrega (Gs)',

    // ── Maquininhas ────────────────────────────────────────
    'cfg.maquininhas_titulo':'Maquininhas de Cartão',
    'cfg.maquininhas_sub':  'Cadastre cada operadora com suas taxas por modalidade.',
    'cfg.adicionar_maq':    'Adicionar Maquininha',
    'cfg.salvar_maq':       'Salvar Maquininhas',
    'cfg.maq_prefixo':      'Maquininha ',

    // ── Features ───────────────────────────────────────────
    'cfg.features_titulo':  'Controle de Features (Admin Master)',
    'cfg.features_sub':     'Ative ou desative abas, tipos de produto e funcionalidades para este restaurante.',
    'cfg.features_titulo2': 'Controle de Features',
    'cfg.features_sub2':    'Ative ou desative abas, tipos de produto e funcionalidades para todos os usuários deste restaurante.',
    'cfg.feat_abas':        '📂 Abas visíveis',
    'cfg.feat_tipos':       '🏷️ Tipos de produto permitidos',
    'cfg.feat_funcs':       '⚙️ Funcionalidades',
    'cfg.salvar_features':  'Salvar Features',

    // ── Tipos de produto (features) ────────────────────────
    'feat.tab.pedidos':     'Pedidos',
    'feat.tab.cozinha':     'Cozinha/KDS',
    'feat.tab.pdv':         'PDV Balcão',
    'feat.tab.financeiro':  'Financeiro',
    'feat.tab.inventario':  'Inventário',
    'feat.tab.equipe':      'Equipe',
    'feat.tab.config':      'Configurações',
    'feat.tab.dashboard':   'Dashboard',
    'feat.tipo.padrao':     'Simples',
    'feat.tipo.bebida':     'Bebida',
    'feat.tipo.lanche':     'Lanche',
    'feat.tipo.pizza':      'Pizza',
    'feat.tipo.acai':       'Açaí',
    'feat.tipo.shake':      'Shake',
    'feat.tipo.suco':       'Suco',
    'feat.tipo.sorvete':    'Sorvete',
    'feat.tipo.montavel':   'Montável',
    'feat.tipo.combo':      'Combo',
    'feat.tipo.variacoes':  'Variações',
    'feat.tipo.kg':         '⚖️ Venda Kg',
    'feat.func.delivery':   'Delivery',
    'feat.func.retirada':   'Retirada',
    'feat.func.local':      'Comer no Local',
    'feat.func.balcao':     'Balcão/PDV',
    'feat.func.cupons':     'Cupons',
    'feat.func.factura':    'Factura',
    'feat.func.multipag':   'Multipagamento',
    'feat.func.agendamento':'Agendamento',

    // ── Categorias extras ──────────────────────────────────
    'cat.subtitle':         'Gerencie a organização e horários de exibição',
    'cat.horario_exib':     '🕐 Horário de Exibição',
    'cat.horario_exib_sub': '(opcional — deixe em branco para exibir sempre)',
    'cat.horario_exemplo':  'Ex: almoço de Seg a Sex das 11:00 às 14:30. Fora desse horário/dia, a categoria fica oculta no cardápio.',

    // ── Motoboy modal ──────────────────────────────────────
    'moto.modal_titulo':    'Motoboy',

    // ── Produtos modal extras ──────────────────────────────
    'prod.adicionar_var':   '+ Adicionar Variação',
    'prod.adicionar_etapa': '+ Adicionar Etapa',
    'prod.adicionar_extra': '+ Adicionar Extra',
    'prod.adicionar_opcao': '+ Adicionar Opção',

    // ── PDV tipos ──────────────────────────────────────────
    'pdv.tipo_balcao':      'PDV Balcão',
    'pdv.retirada':         'Retirada',
    'pdv.balcao_pdv':       'Balcão/PDV',
    'pdv.balcao_label':     'Balcão',
    'pdv.balcao_kg':        'Balcão - Venda Kg',
    'pdv.pag_balcao':       'Pagamento no Balcão',
    'pdv.max_turnos':       'Máximo de 2 turnos por dia.',
    'pdv.adicionar_forma':  '+ Adicionar forma',

    // ── Financeiro extras ──────────────────────────────────
    'fin.abertura_lbl':     'Abertura',
  },

  // ══════════════════════════════════════════════════════════
  // ESPAÑOL (Paraguay)
  // ══════════════════════════════════════════════════════════
  es: {
    // ── Sidebar ────────────────────────────────────────────
    'sidebar.visao':        'Visión',
    'sidebar.pdv':          'PDV Mostrador',
    'sidebar.pedidos':      'Pedidos',
    'sidebar.cozinha':      'Cocina',
    'sidebar.equipe':       'Equipo',
    'sidebar.financeiro':   'Finanzas',
    'sidebar.config':       'Config',
    'sidebar.master':       'Master',
    'sidebar.estoque':      'Stock',
    'sidebar.turnos':       'Turnos 📺',
    'sidebar.sair':         'Salir',

    // ── Dashboard ──────────────────────────────────────────
    'dash.title':           'Panel de Control',
    'dash.vendas_hoje':     'Ventas Hoy',
    'dash.pedidos_hoje':    'Pedidos Hoy',
    'dash.custo_moto':      'Costo Entregas',
    'dash.em_preparo':      'En Preparación',
    'dash.top_produtos':    'Top Productos',
    'dash.clientes':        'Clientes Frecuentes',
    'dash.periodo':         'Período',
    'dash.hoje':            'Hoy',
    'dash.7dias':           '7 días',
    'dash.30dias':          '30 días',
    'dash.mes':             'Este mes',
    'dash.personalizado':   'Personalizado',
    'dash.nenhuma_venda':   'Sin ventas en el período',

    // ── Pedidos ────────────────────────────────────────────
    'pedidos.title':        'Pedidos',
    'pedidos.cliente':      'Cliente',
    'pedidos.status':       'Estado',
    'pedidos.total':        'Total',
    'pedidos.acoes':        'Acciones',
    'pedidos.nenhum':       'Ningún pedido activo.',
    'pedidos.cozinha':      '🔥 Cocina',
    'pedidos.confirmar':    '✅ Confirmar',
    'pedidos.imprimir':     'Imprimir',
    'pedidos.cancelar':     'Cancelar',
    'pedidos.solicitar_cancel': '🚫 Solicitar Cancelación',
    'pedidos.aprovar':      '✅ Aprobar',
    'pedidos.negar':        '❌ Negar',
    'pedidos.avisar':       'Avisar Cliente',
    'pedidos.rota':         '🛵 Enviar Ruta',
    'pedidos.sel_motoboy':  'Seleccionar repartidor...',
    'pedidos.auto_confirm': '⏰ Auto-confirmado (4h)',

    // ── Status badges ──────────────────────────────────────
    'status.pendente':        'PENDIENTE',
    'status.em_preparo':      'EN PREPARACIÓN',
    'status.pronto_entrega':  'LISTO',
    'status.saiu_entrega':    'EN CAMINO',
    'status.entregue':        'ENTREGADO',
    'status.cancelado':       'CANCELADO',

    // ── Cozinha (KDS) ──────────────────────────────────────
    'kds.title':            'Monitor de Cocina (KDS)',
    'kds.livre':            '👨‍🍳 ¡Cocina libre!',
    'kds.pronto':           '✅ LISTO',
    'kds.min':              'min',

    // ── PDV ────────────────────────────────────────────────
    'pdv.title':            '🏪 Venta Mostrador (PDV)',
    'pdv.buscar':           '🔍 Buscar producto...',
    'pdv.mesa_num':         'Nº',
    'pdv.mesa_nome':        'Nombre',
    'pdv.telefone':         'Teléfono',
    'pdv.tipo_pedido':      'Tipo de Pedido',
    'pdv.subtotal':         'Subtotal:',
    'pdv.desconto':         '🏷️ Descuento',
    'pdv.total':            'Total:',
    'pdv.lancar':           '✅ Lanzar Pedido',
    'pdv.venda':            'Venta',
    'pdv.mesas':            'Mesas',
    'pdv.nenhuma_mesa':     'Ninguna mesa activa',
    'pdv.mesas_andamento':  'Pedidos en Curso',
    'pdv.entregar':         'Entregar / Cerrar',
    'pdv.na_cozinha':       '🔥 En Cocina',

    // ── Financeiro ─────────────────────────────────────────
    'fin.title':            '💰 Control Financiero',
    'fin.faturamento':      'Facturación',
    'fin.custo_moto':       'Costo Entregas',
    'fin.lucro':            'Resultado Operacional',
    'fin.pedidos':          'Pedidos',
    'fin.ticket_medio':     'Ticket Promedio',
    'fin.por_pagamento':    '💳 Por Forma de Pago',
    'fin.pix':              'Pix',
    'fin.transferencia':    'Transferencia',
    'fin.cartao':           'Tarjeta',
    'fin.dinheiro':         'Efectivo',
    'fin.motoboys':         '🏍️ Informe Repartidores',
    'fin.filtrar':          'Filtrar',
    'fin.exportar_csv':     '📊 CSV / Power BI',
    'fin.exportar_pdf':     '📄 PDF',
    'fin.graficos':         '📈 Gráficos',
    'fin.fechar_caixa':     'Cerrar Caja',
    'fin.periodo_inicio':   'Inicio',
    'fin.periodo_fim':      'Fin',
    'fin.forma_pag':        'Forma de Pago',
    'fin.todos':            'Todos',
    'fin.caixa_ctrl':       'Control de Caja',
    'fin.abertura':         '🟢 Apertura',
    'fin.suprimento':       '➕ Suministro',
    'fin.sangria':          '💸 Retiro',
    'fin.despesa':          '🧾 Gasto',

    // ── Produtos ───────────────────────────────────────────
    'prod.title':           'Productos',
    'prod.novo':            '+ Nuevo Producto',
    'prod.buscar':          '🔍 Buscar producto...',
    'prod.editar':          'Editar',
    'prod.pausar':          'Pausar',
    'prod.reativar':        'Reactivar',
    'prod.excluir':         'Eliminar',
    'prod.duplicar':        'Duplicar',
    'prod.nome':            'Nombre',
    'prod.descricao':       'Descripción',
    'prod.preco':           'Precio base (Gs)',
    'prod.categoria':       'Categoría',
    'prod.subcategoria':    'Subcategoría',
    'prod.imagem':          'Imagen (Upload o URL)',
    'prod.salvar':          'Guardar Producto',
    'prod.cancelar':        'Cancelar',
    'prod.tipo':            'Tipo de Producto',
    'prod.somente_balcao':  'Solo Mostrador',
    'prod.extras':          '¿Tiene adicionales?',
    'prod.estoque':         'Vincular al stock',

    // ── Categorias ─────────────────────────────────────────
    'cat.title':            '🏷️ Categorías del Menú',
    'cat.nova':             '+ Nueva Categoría',
    'cat.nome':             'Nombre Exhibición',
    'cat.slug':             'Slug (ID único)',
    'cat.ordem':            'Orden',
    'cat.horario':          'Horario (opcional)',
    'cat.salvar':           'Guardar',

    // ── Motoboys ───────────────────────────────────────────
    'moto.title':           'Equipo Repartidores',
    'moto.novo':            '+ Nuevo Repartidor',
    'moto.nome':            'Nombre',
    'moto.telefone':        'Teléfono (WhatsApp)',
    'moto.salvar':          'Guardar',

    // ── Equipe ─────────────────────────────────────────────
    'equipe.title':         'Gestión de Equipo',
    'equipe.nome':          'Nombre',
    'equipe.email':         'Email',
    'equipe.cargo':         'Cargo',
    'equipe.desde':         'Desde',
    'equipe.acoes':         'Acciones',
    'equipe.novo_usuario':  'Nuevo Usuario',
    'equipe.criar':         'Crear',
    'equipe.promover':      'Promover',
    'equipe.rebaixar':      'Rebajar',
    'equipe.excluir':       'Eliminar',

    // ── Configurações ──────────────────────────────────────
    'cfg.title':            '⚙️ Configuraciones',
    'cfg.identidade':       '🏪 Identidad del Local',
    'cfg.nome_rest':        'Nombre del Restaurante',
    'cfg.descricao':        'Descripción (tagline)',
    'cfg.url':              'URL del Sitio',
    'cfg.telefone':         'Teléfono (exhibición)',
    'cfg.whatsapp':         'WhatsApp para pedidos',
    'cfg.logo':             'Logo / Ícono',
    'cfg.salvar_id':        '💾 Guardar Identidad',
    'cfg.pagamento':        '💳 Datos de Pago',
    'cfg.chave_pix':        'Clave Pix',
    'cfg.nome_pix':         'Nombre titular Pix',
    'cfg.alias':            'Número / Alias (PY)',
    'cfg.nome_alias':       'Nombre titular Alias',
    'cfg.localizacao':      '📍 Localización',
    'cfg.lat':              'Latitud del Local',
    'cfg.lng':              'Longitud del Local',
    'cfg.operacao':         '🕐 Operación & Horarios',
    'cfg.status_loja':      'Estado Manual del Local',
    'cfg.cotacao':          'Cotización Real (Gs/R$)',
    'cfg.salvar_loc':       '💾 Guardar Localización & Operación',
    'cfg.visual':           '🎨 Personalización Visual',
    'cfg.cor_primaria':     'Color Principal (botones)',
    'cfg.icone_upload':     'Subir Ícono',
    'cfg.salvar_visual':    '🎨 Guardar Personalización',
    'cfg.banners':          '🏷️ Banners Promocionales',
    'cfg.frete':            '🚗 Tabla de Envío',
    'cfg.limite_dist':      'Límite de distancia (km)',
    'cfg.taxa_moto':        'Tasa base repartidor (Gs)',
    'cfg.salvar_frete':     '💾 Guardar Tabla de Envío',
    'cfg.cupons':           '🎟️ Gestión de Cupones',
    'cfg.novo_cupom':       '+ Nuevo Cupón',
    'cfg.extras_globais':   '➕ Adicionales Globales',

    // ── Estoque ────────────────────────────────────────────
    'estoque.title':        'Gestión de Stock',
    'estoque.novo':         '+ Nuevo Ítem',
    'estoque.buscar':       '🔍 Buscar...',
    'estoque.todos':        'Todos',
    'estoque.ok':           'OK',
    'estoque.baixo':        'Bajo',
    'estoque.zerado':       'Agotado',
    'estoque.nome':         'Nombre del Ítem',
    'estoque.qtd':          'Cantidad',
    'estoque.unidade':      'Unidad',
    'estoque.minimo':       'Cantidad Mínima',
    'estoque.obs':          'Observaciones',
    'estoque.salvar':       'Guardar',
    'estoque.ajuste':       'Ajuste de Stock',
    'estoque.adicionar':    'Agregar',
    'estoque.subtrair':     'Restar',
    'estoque.definir':      'Definir',
    'estoque.motivo':       'Motivo (opcional)',
    'estoque.confirmar':    'Confirmar Ajuste',

    // ── Alerts / Confirms ──────────────────────────────────
    'alert.salvo':               '✅ ¡Guardado con éxito!',
    'alert.erro':                '❌ Error: ',
    'alert.confirmado':          '✅ ¡Confirmado!',
    'alert.cancelado':           '✅ ¡Pedido cancelado!',
    'alert.cancel_enviado':      '✅ ¡Solicitud enviada! El dueño será notificado.',
    'alert.cancel_negado':       '✅ Solicitud de cancelación negada.',
    'alert.produto_salvo':       '✅ ¡Producto guardado!',
    'alert.produto_pausado':     '⏸️ ¡Producto pausado!',
    'alert.produto_reativado':   '✅ ¡Producto reactivado!',
    'alert.produto_duplicado':   '✅ ¡Producto duplicado! La copia fue creada pausada.',
    'alert.produto_excluido':    '✅ ¡Producto eliminado!',
    'alert.cat_salva':           '✅ ¡Categoría guardada!',
    'alert.cat_excluida':        '✅ ¡Categoría eliminada!',
    'alert.moto_salvo':          '✅ ¡Repartidor guardado!',
    'alert.moto_excluido':       '✅ ¡Repartidor eliminado!',
    'alert.cfg_salvas':          '✅ ¡Configuraciones guardadas!',
    'alert.frete_salvo':         '✅ ¡Tabla de envío guardada!',
    'alert.cupom_salvo':         '✅ ¡Cupón guardado!',
    'alert.usuario_criado':      '✅ ¡Usuario creado!',
    'alert.cargo_alterado':      '✅ ¡Cargo modificado!',
    'alert.acesso_negado':       'Acceso denegado.',
    'alert.carrinho_vazio':      '¡Carrito vacío!',
    'alert.sel_pedidos_moto':    '¡Seleccione los pedidos y el repartidor!',
    'alert.features_salvas':     '✅ ¡Features guardadas!',
    'alert.caixa_reaberto':      '✅ ¡Caja reabierta!',
    'alert.operacao_registrada': '✅ ¡Operación registrada!',
    'alert.delivery_encerrado':  '✅ ¡Delivery cerrado!',
    'alert.delivery_reaberto':   '✅ ¡Delivery reabierto!',
    'alert.horario_estendido':   '✅ ¡Horario extendido!',
    'alert.csv_exportado':       '✅ ¡CSV exportado!',

    'confirm.cancelar_pedido':   '⚠️ ¿Confirma la CANCELACIÓN de este pedido?\nEsta acción no se puede deshacer.',
    'confirm.excluir_produto':   '⚠️ ¿Eliminar este producto?\nEsta acción no se puede deshacer.',
    'confirm.excluir_cat':       '⚠️ ¿Eliminar esta categoría?\nEsta acción no se puede deshacer.',
    'confirm.excluir_moto':      '⚠️ ¿Eliminar este repartidor?\nEsta acción no se puede deshacer.',
    'confirm.excluir_usuario':   '⚠️ ¿Eliminar este usuario?\nSolo se elimina el perfil.',
    'confirm.fechar_caixa':      '¿Cerrar la caja de hoy?',
    'confirm.duplicar_produto':  '¿Duplicar este producto? Se creará una copia pausada.',
    'confirm.encerrar_delivery': '¿Cerrar el delivery ahora?',
    'confirm.reabrir_delivery':  '¿Reabrir el delivery para nuevos pedidos?',
    'confirm.aprovar_cancel':    '⚠️ ¿Confirma la CANCELACIÓN de este pedido?',
    'confirm.reabrir_caixa':     '¿Autorizar reapertura de caja?',

    'prompt.motivo_cancel':      '🚫 Solicitar cancelación\n\nIngrese el motivo:',
    'prompt.negar_cancel':       'Motivo para NEGAR la cancelación (opcional):',
    'prompt.motivo_ajuste':      'Motivo del ajuste (opcional):',

    // ── Cargos ─────────────────────────────────────────────
    'cargo.adminMaster':    '🔱 ADMIN MASTER',
    'cargo.dono':           '🔑 DUEÑO',
    'cargo.gerente':        '👔 GERENTE',
    'cargo.funcionario':    '👷 EMPLEADO',
    'cargo.garcom':         '🍽️ MOZO',

    // ── Geral ──────────────────────────────────────────────
    'geral.salvar':         'Guardar',
    'geral.cancelar':       'Cancelar',
    'geral.editar':         'Editar',
    'geral.excluir':        'Eliminar',
    'geral.novo':           'Nuevo',
    'geral.buscar':         'Buscar',
    'geral.filtrar':        'Filtrar',
    'geral.carregando':     'Cargando...',
    'geral.sem_dados':      'Sin datos.',
    'geral.aberto':         '🟢 Abierto',
    'geral.fechado':        '🔴 Cerrado',
    'geral.sim':            'Sí',
    'geral.nao':            'No',
    'geral.todos':          'Todos',
    'geral.hoje':           'Hoy',

    // ── Días de la semana ──────────────────────────────────
    'dia.seg':              'Lunes',
    'dia.ter':              'Martes',
    'dia.qua':              'Miércoles',
    'dia.qui':              'Jueves',
    'dia.sex':              'Viernes',
    'dia.sab':              'Sábado',
    'dia.dom':              'Domingo',

    // ── Grilla semanal de horarios ─────────────────────────
    'cfg.horarios_titulo':  '📅 Horarios por día de la semana',
    'cfg.horarios_sub':     'Cada día puede tener hasta 2 turnos (ej: almuerzo + cena).',
    'cfg.aplicar_todos':    'Aplicar a todos',
    'cfg.abertura_turno':   '🕐 Apertura',
    'cfg.segundo_turno':    '🕑 2.º Turno',
    'cfg.das':              'De',
    'cfg.ate':              'Hasta',
    'cfg.badge_aberto':     '🟢 Abierto',
    'cfg.badge_fechado':    '🔴 Cerrado',
    'cfg.adicionar_turno':  'Agregar 2.º turno',
    'cfg.seguir_horario':   '🟢 Seguir horario semanal',
    'cfg.forcar_fechado':   '🔴 Forzar cerrado',
    'cfg.maps_tip':         'Para encontrar las coordenadas: abra Google Maps, haga clic derecho sobre la dirección del local y copie las coordenadas.',
    'cfg.estender_btn':     '+Horario',
    'cfg.estender_title':   'Extender horario',

    // ── Dashboard extras ───────────────────────────────────
    'dash.a_pagar_moto':    'A Pagar Repartidores',
    'dash.clientes_top':    'Clientes Frecuentes',
    'del.aberto_badge':     '🟢 Delivery Abierto',

    // ── Selects genéricos ──────────────────────────────────
    'sel.motoboy':          'Seleccionar Repartidor...',
    'sel.selecione':        'Seleccione...',
    'sel.sem_categoria':    '— Sin categoría —',
    'sel.sem_subcategoria': '— Sin subcategoría —',

    // ── Banners ────────────────────────────────────────────
    'cfg.banner_sub':       'Al hacer clic en el banner el cliente abre el producto. Defina también el descuento aplicado automáticamente.',
    'cfg.id_produto':       'ID del Producto',
    'cfg.tipo_desconto':    'Tipo de Descuento',
    'cfg.valor_desconto':   'Valor del Descuento',
    'cfg.foto_banner':      'Foto del Banner',
    'cfg.salvar_banner1':   'Guardar Banner 1',
    'cfg.salvar_banner2':   'Guardar Banner 2',
    'cfg.desc_percentual':  '% Porcentual',
    'cfg.desc_fixo':        'Gs Fijo',

    // ── Adicionales globales ───────────────────────────────
    'cfg.adicionais_titulo':'Adicionales Globales',
    'cfg.adicionais_sub':   'Aparecen como opción extra en el checkout. Elija en qué categorías se mostrarán.',
    'cfg.exibir_cats':      '📂 Mostrar en categorías:',
    'cfg.cats_sub':         'Si ninguna está marcada, aparece en todas.',
    'cfg.adicionar_adicional':'+ Agregar Adicional',
    'cfg.salvar_adicionais':'Guardar Adicionales Globales',

    // ── Cupones (encabezados tabla) ────────────────────────
    'cfg.gestao_cupons':    'Gestión de Cupones de Descuento',
    'cfg.col_codigo':       'Código',
    'cfg.col_tipo':         'Tipo',
    'cfg.col_valor':        'Valor',
    'cfg.col_minimo':       'Mínimo',
    'cfg.col_usos':         'Usos / Límite',
    'cfg.col_validade':     'Validez',
    'cfg.col_status':       'Estado',
    'cfg.col_acoes':        'Acciones',

    // ── Modal cupón ────────────────────────────────────────
    'cfg.cupom_gerenciar':  'Gestionar Cupón',
    'cfg.cupom_codigo_lbl': 'Código del Cupón',
    'cfg.cupom_tipo_lbl':   'Tipo de Descuento',
    'cfg.cupom_percentual': 'Descuento Porcentual (%)',
    'cfg.cupom_frete':      'Envío Gratis',
    'cfg.cupom_valor_lbl':  'Valor del Descuento (%)',
    'cfg.cupom_minimo_lbl': 'Valor Mínimo del Pedido (Gs)',
    'cfg.cupom_limite_lbl': 'Límite de Usos',
    'cfg.cupom_ilimitado':  '(0 = ilimitado)',
    'cfg.cupom_validade_lbl':'Validez',
    'cfg.cupom_opcional':   '(opcional)',
    'cfg.cupom_ativo_lbl':  'Cupón Activo',
    'cfg.cupom_ativo_sub':  'Desmarque para desactivar temporalmente',
    'cfg.salvar_cupom':     'Guardar Cupón',

    // ── Tabla de envío extras ──────────────────────────────
    'cfg.frete_km_titulo':  'Tabla de Envío por KM',
    'cfg.frete_km_sub':     'Defina el valor cobrado al cliente y el pago al repartidor. Marque "Combinar" para deshabilitar una franja.',
    'cfg.limite_entrega':   '🛑 Límite de entrega:',
    'cfg.sem_limite':       'Sin límite',
    'cfg.km_vazio':         'km (dejar vacío = sin límite)',
    'cfg.col_faixa':        'Franja',
    'cfg.col_cliente_gs':   '💰 Cliente (Gs)',
    'cfg.col_motoboy_gs':   '🛵 Repartidor (Gs)',
    'cfg.col_combinar':     'Combinar',
    'cfg.acima_20km':       'Más de 20 km',
    'cfg.a_combinar':       '🤝 A Combinar',
    'cfg.custos_moto':      '⛽ Costos del Repartidor',
    'cfg.combustivel':      'Combustible/día (Gs)',
    'cfg.taxa_base':        'Tasa base/entrega (Gs)',

    // ── Terminales de pago ─────────────────────────────────
    'cfg.maquininhas_titulo':'Terminales de Pago',
    'cfg.maquininhas_sub':  'Registre cada operadora con sus tasas por modalidad.',
    'cfg.adicionar_maq':    'Agregar Terminal',
    'cfg.salvar_maq':       'Guardar Terminales',
    'cfg.maq_prefixo':      'Terminal ',

    // ── Features ───────────────────────────────────────────
    'cfg.features_titulo':  'Control de Features (Admin Master)',
    'cfg.features_sub':     'Active o desactive pestañas, tipos de producto y funcionalidades para este restaurante.',
    'cfg.features_titulo2': 'Control de Features',
    'cfg.features_sub2':    'Active o desactive pestañas, tipos de producto y funcionalidades para todos los usuarios de este restaurante.',
    'cfg.feat_abas':        '📂 Pestañas visibles',
    'cfg.feat_tipos':       '🏷️ Tipos de producto permitidos',
    'cfg.feat_funcs':       '⚙️ Funcionalidades',
    'cfg.salvar_features':  'Guardar Features',

    // ── Tipos de producto (features) ──────────────────────
    'feat.tab.pedidos':     'Pedidos',
    'feat.tab.cozinha':     'Cocina/KDS',
    'feat.tab.pdv':         'PDV Mostrador',
    'feat.tab.financeiro':  'Finanzas',
    'feat.tab.inventario':  'Inventario',
    'feat.tab.equipe':      'Equipo',
    'feat.tab.config':      'Configuraciones',
    'feat.tab.dashboard':   'Dashboard',
    'feat.tipo.padrao':     'Simple',
    'feat.tipo.bebida':     'Bebida',
    'feat.tipo.lanche':     'Sándwich',
    'feat.tipo.pizza':      'Pizza',
    'feat.tipo.acai':       'Açaí',
    'feat.tipo.shake':      'Shake',
    'feat.tipo.suco':       'Jugo',
    'feat.tipo.sorvete':    'Helado',
    'feat.tipo.montavel':   'Armable',
    'feat.tipo.combo':      'Combo',
    'feat.tipo.variacoes':  'Variaciones',
    'feat.tipo.kg':         '⚖️ Venta Kg',
    'feat.func.delivery':   'Delivery',
    'feat.func.retirada':   'Retiro',
    'feat.func.local':      'Consumo en Local',
    'feat.func.balcao':     'Mostrador/PDV',
    'feat.func.cupons':     'Cupones',
    'feat.func.factura':    'Factura',
    'feat.func.multipag':   'Multipago',
    'feat.func.agendamento':'Agendamiento',

    // ── Categorías extras ──────────────────────────────────
    'cat.subtitle':         'Gestione la organización y horarios de exhibición',
    'cat.horario_exib':     '🕐 Horario de Exhibición',
    'cat.horario_exib_sub': '(opcional — deje en blanco para mostrar siempre)',
    'cat.horario_ejemplo':  'Ej: almuerzo de Lun a Vie de 11:00 a 14:30. Fuera de ese horario/día, la categoría queda oculta en el menú.',

    // ── Modal repartidor ───────────────────────────────────
    'moto.modal_titulo':    'Repartidor',

    // ── Productos modal extras ─────────────────────────────
    'prod.adicionar_var':   '+ Agregar Variación',
    'prod.adicionar_etapa': '+ Agregar Etapa',
    'prod.adicionar_extra': '+ Agregar Extra',
    'prod.adicionar_opcao': '+ Agregar Opción',

    // ── PDV tipos ──────────────────────────────────────────
    'pdv.tipo_balcao':      'PDV Mostrador',
    'pdv.retirada':         'Retiro',
    'pdv.balcao_pdv':       'Mostrador/PDV',
    'pdv.balcao_label':     'Mostrador',
    'pdv.balcao_kg':        'Mostrador - Venta Kg',
    'pdv.pag_balcao':       'Pago en Mostrador',
    'pdv.max_turnos':       'Máximo 2 turnos por día.',
    'pdv.adicionar_forma':  '+ Agregar forma de pago',

    // ── Financiero extras ──────────────────────────────────
    'fin.abertura_lbl':     'Apertura',
  }
};

// ── Engine de tradução ───────────────────────────────────────
let _adminLang = localStorage.getItem('admin_lang') || 'pt';

// Retorna texto traduzido
function t(key, fallback) {
  return ADMIN_LANGS[_adminLang]?.[key]
    || ADMIN_LANGS['pt']?.[key]
    || fallback
    || key;
}

// Aplica traduções em todos os elementos com data-i18n
function applyAdminI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (!val) return;
    // placeholder especial
    if (el.hasAttribute('placeholder')) {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  // data-i18n-placeholder para inputs
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  // Atualiza lang do html
  document.documentElement.lang = _adminLang === 'pt' ? 'pt-BR' : 'es-PY';
}

// Troca idioma e re-aplica
function setAdminLang(lang) {
  if (!ADMIN_LANGS[lang]) return;
  _adminLang = lang;
  localStorage.setItem('admin_lang', lang);
  applyAdminI18n();
  // Atualiza botões do seletor
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Auto-aplica ao carregar
document.addEventListener('DOMContentLoaded', () => {
  applyAdminI18n();
  // Marca botão ativo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === _adminLang);
  });
});

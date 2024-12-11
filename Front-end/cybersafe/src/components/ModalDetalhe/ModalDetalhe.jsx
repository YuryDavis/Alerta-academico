import React, { useEffect, useState } from 'react';
import { Table, Button, Alert, List, Typography, Input, Form, message } from 'antd';
import styles from './ModalDetalhe.module.css';
import { findMsg, enviarMsg } from '../../services/api';

const { Text } = Typography;
const { TextArea } = Input;

const ModalDetalhe = ({ aluno, fecharModal }) => {
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (aluno?.matricula) {
      const fetchMensagens = async () => {
        try {
          const response = await findMsg(aluno.matricula);
          setMensagens(response?.data?.mensagens || []);
        } catch (error) {
          console.error('Erro ao buscar mensagens:', error);
          setMensagens([]);
        } finally {
          setLoading(false);
        }
      };

      fetchMensagens();
    }
  }, [aluno]);

  const handleAddMessage = async (values) => {
    setSubmitting(true);

    const novaMensagem = {
      titulo: values.titulo,
      descricao: values.descricao,
    };

    try {
      await enviarMsg(novaMensagem,aluno.matricula ); 
      message.success('Mensagem enviada com sucesso!');

      const response = await findMsg(aluno.matricula);
      setMensagens(response?.data?.mensagens || []);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      message.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!aluno) return null;

  const columns = [
    {
      title: 'Disciplina',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Média',
      dataIndex: 'media',
      key: 'media',
    },
    {
      title: 'Frequência',
      dataIndex: 'frequencia',
      key: 'frequencia',
    },
  ];

  const disciplinasData = Array.isArray(aluno.disciplinas)
    ? aluno.disciplinas
    : [aluno.disciplinas];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Detalhes do Aluno</h2>
          <Button type="primary" danger onClick={fecharModal}>
            Fechar
          </Button>
        </div>

        <div className={styles.content}>

          <div className={styles.info}>
            <p><strong>Nome:</strong> {aluno.name}</p>
            <p><strong>Matrícula:</strong> {aluno.matricula}</p>
            <p><strong>Média:</strong> {aluno.media}</p>
            <p><strong>Frequência:</strong> {aluno.frequencia}</p>
          </div>

          <h3>Disciplinas</h3>
          <Table
            columns={columns}
            dataSource={disciplinasData}
            pagination={false}
            rowKey="nome"
          />


          <h3>Mensagens</h3>
          {loading ? (
            <Alert message="Carregando mensagens..." type="info" />
          ) : mensagens.length > 0 ? (
            <List
              bordered
              dataSource={mensagens}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<Text strong>{item.titulo}</Text>}
                    description={item.descricao}
                  />
                  <Text type="secondary">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </Text>
                </List.Item>
              )}
            />
          ) : (
            <Alert message="Nenhuma mensagem disponível para este aluno." type="warning" showIcon />
          )}


          <h3>Adicionar Nova Mensagem</h3>
          <Form layout="vertical" onFinish={handleAddMessage}>
            <Form.Item
              label="Título"
              name="titulo"
              rules={[{ required: true, message: 'Por favor, insira o título da mensagem' }]}
            >
              <Input placeholder="Digite o título da mensagem" />
            </Form.Item>
            <Form.Item
              label="Descrição"
              name="descricao"
              rules={[{ required: true, message: 'Por favor, insira a descrição da mensagem' }]}
            >
              <TextArea rows={4} placeholder="Digite a descrição da mensagem" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={submitting}
              >
                Adicionar Mensagem
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalhe;

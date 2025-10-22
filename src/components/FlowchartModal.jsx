"use client"

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow'

// Cores padronizadas para todos os nós (mesmo estilo do nó "Agente SDR - Recepção Inteligente")
const nodeStyle = {
  background: '#32373c',
  color: 'white',
  border: '2px solid #32373c',
}

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Paciente envia mensagem via WhatsApp' },
    position: { x: 400, y: 0 },
    style: {
      ...nodeStyle,
      borderRadius: '16px',
      padding: '16px',
      fontSize: '16px',
      fontWeight: 'bold',
      width: 300,
    },
  },
  {
    id: '2',
    data: { label: 'Agente SDR - Recepção Inteligente' },
    position: { x: 400, y: 100 },
    style: {
      ...nodeStyle,
      borderRadius: '16px',
      padding: '16px',
      fontSize: '16px',
      fontWeight: 'bold',
      width: 300,
    },
  },
  {
    id: '3',
    data: { label: 'Triagem por Necessidade' },
    position: { x: 400, y: 200 },
    style: {
      ...nodeStyle,
      borderRadius: '16px',
      padding: '16px',
      fontSize: '16px',
      fontWeight: 'bold',
      width: 300,
    },
  },
  // Subfunil 1: Resultados de Exames
  {
    id: '4',
    data: { label: 'Resultado de Exames' },
    position: { x: 0, y: 350 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      width: 200,
    },
  },
  {
    id: '4a',
    data: { label: 'Fornece resultado automaticamente' },
    position: { x: 0, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 200,
    },
  },
  // Subfunil 2: Procedimentos
  {
    id: '5',
    data: { label: 'Agendamento de Procedimentos' },
    position: { x: 250, y: 350 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      width: 220,
    },
  },
  {
    id: '5a',
    data: { label: 'Particular' },
    position: { x: 200, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 120,
    },
  },
  {
    id: '5b',
    data: { label: 'Convênio (10+ planos)' },
    position: { x: 350, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 180,
    },
  },
  {
    id: '5c',
    data: { label: 'Agenda com especialista disponível' },
    position: { x: 225, y: 550 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 260,
    },
  },
  // Subfunil 3: Exames
  {
    id: '6',
    data: { label: 'Agendamento de Exames' },
    position: { x: 550, y: 350 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      width: 200,
    },
  },
  {
    id: '6a',
    data: { label: 'Particular' },
    position: { x: 500, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 120,
    },
  },
  {
    id: '6b',
    data: { label: 'Convênio' },
    position: { x: 650, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 120,
    },
  },
  {
    id: '6c',
    data: { label: 'Verifica disponibilidade e agenda' },
    position: { x: 525, y: 550 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 230,
    },
  },
  // Subfunil 4: Dúvidas
  {
    id: '7',
    data: { label: 'Dúvidas Gerais' },
    position: { x: 800, y: 350 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      width: 180,
    },
  },
  {
    id: '7a',
    data: { label: 'Responde via FAQ inteligente' },
    position: { x: 770, y: 450 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 220,
    },
  },
  {
    id: '7b',
    data: { label: 'Encaminha para atendente se necessário' },
    position: { x: 760, y: 550 },
    style: {
      ...nodeStyle,
      borderRadius: '12px',
      padding: '12px',
      fontSize: '14px',
      width: 240,
    },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#d74b4b', strokeWidth: 3 } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#d74b4b', strokeWidth: 3 } },
  { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e3-6', source: '3', target: '6', animated: true, style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e3-7', source: '3', target: '7', animated: true, style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e4-4a', source: '4', target: '4a', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e5-5a', source: '5', target: '5a', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e5-5b', source: '5', target: '5b', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e5a-5c', source: '5a', target: '5c', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e5b-5c', source: '5b', target: '5c', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e6-6a', source: '6', target: '6a', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e6-6b', source: '6', target: '6b', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e6a-6c', source: '6a', target: '6c', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e6b-6c', source: '6b', target: '6c', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e7-7a', source: '7', target: '7a', style: { stroke: '#d74b4b', strokeWidth: 2 } },
  { id: 'e7a-7b', source: '7', target: '7b', style: { stroke: '#d74b4b', strokeWidth: 2 } },
]

export default function FlowchartModal({ isOpen, onClose }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-screen h-screen bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Fluxo de Atendimento Inteligente - <span className="text-brand">Gastrocentro</span>
                </h3>
                <p className="text-gray-600">Explore o fluxo interativo de triagem e atendimento com Agentes de IA</p>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 bg-red-100 hover:bg-red-200 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <X className="w-6 h-6 text-brand" />
              </button>
            </div>

            {/* ReactFlow */}
            <div className="w-full h-full pt-24">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                attributionPosition="bottom-left"
              >
                <Background color="#4a5568" gap={16} />
                <Controls className="bg-slate-800 border-slate-600" />
              </ReactFlow>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

# main.py
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List, Any
import json
from collections import defaultdict

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vector-shift-assignment.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    graph = defaultdict(list)
    for edge in edges:
        graph[edge['source']].append(edge['target'])
    
    visited = set()
    temp = set()
    
    def has_cycle(node: str) -> bool:
        if node in temp:
            return True
        if node in visited:
            return False
            
        temp.add(node)
        
        for neighbor in graph[node]:
            if has_cycle(neighbor):
                return True
                
        temp.remove(node)
        visited.add(node)
        return False
    
    for node in [node['id'] for node in nodes]:
        if node not in visited:
            if has_cycle(node):
                return False
    
    return True

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    pipeline_data = json.loads(pipeline)
    
    nodes = pipeline_data['nodes']
    edges = pipeline_data['edges']
    
    num_nodes = len(nodes)
    num_edges = len(edges)
    is_dag_result = is_dag(nodes, edges)
    
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag_result
    }
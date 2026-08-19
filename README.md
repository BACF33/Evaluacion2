import React, { useState, useEffect } from "react";

const API_URL = "https://retoolapi.dev/xNP9Je/data";

const CrudPage = () => {
    const [registros, setRegistros] = useState([]);
    const [form, setForm] = useState({ "Column 1": "", "Column 2": "" });
    const [editandoId, setEditandoId] = useState(null);
    const [mostrarForm, setMostrarForm] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [cargando, setCargando] = useState(false);
    const [guardando, setGuardando] = useState(false);

    const cargarRegistros = async () => {
        setCargando(true);
        setErrorMsg("");
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setRegistros(data);
        } catch (e) {
            setErrorMsg("Error al cargar los registros");
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        cargarRegistros();
    }, []);

    const validar = () => {
        if (!form["Column 1"].trim() || !form["Column 2"].trim()) {
            setErrorMsg("Todos los campos son obligatorios");
            return false;
        }
        return true;
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleCrear = async () => {
        if (!validar()) return;
        setGuardando(true);
        setErrorMsg("");
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const nuevo = await res.json();
            setRegistros([...registros, nuevo]);
            handleCancelar();
        } catch (e) {
            setErrorMsg("Error al crear el registro");
        } finally {
            setGuardando(false);
        }
    };

    const handleActualizar = async () => {
        if (!validar()) return;
        setGuardando(true);
        setErrorMsg("");
        try {
            const res = await fetch(`${API_URL}/${editandoId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            const actualizado = await res.json();
            setRegistros(registros.map((r) => (r.id === editandoId ? actualizado : r)));
            handleCancelar();
        } catch (e) {
            setErrorMsg("Error al actualizar el registro");
        } finally {
            setGuardando(false);
        }
    };

    const handleBorrar = async (id) => {
        if (!window.confirm("¿Seguro que deseas eliminar este registro?")) return;
        try {
            await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            setRegistros(registros.filter((r) => r.id !== id));
        } catch (e) {
            setErrorMsg("Error al eliminar el registro");
        }
    };

    const handleEditarClick = (registro) => {
        setEditandoId(registro.id);
        setForm({ "Column 1": registro["Column 1"] || "", "Column 2": registro["Column 2"] || "" });
        setMostrarForm(true);
        setErrorMsg("");
    };

    const handleCancelar = () => {
        setMostrarForm(false);
        setEditandoId(null);
        setForm({ "Column 1": "", "Column 2": "" });
        setErrorMsg("");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Gestión de registros</h1>
                    {!mostrarForm && (
                        <button
                            onClick={() => {
                                setMostrarForm(true);
                                setEditandoId(null);
                                setForm({ "Column 1": "", "Column 2": "" });
                                setErrorMsg("");
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Nuevo registro
                        </button>
                    )}
                </div>

                {mostrarForm && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            {editandoId ? "Editar registro" : "Nuevo registro"}
                        </h2>

                        {errorMsg && (
                            <p className="text-red-500 text-sm mb-3">{errorMsg}</p>
                        )}

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Campo 1</label>
                                <input
                                    type="text"
                                    name="Column 1"
                                    value={form["Column 1"]}
                                    onChange={handleChange}
                                    placeholder="Nombre o valor"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Campo 2</label>
                                <input
                                    type="text"
                                    name="Column 2"
                                    value={form["Column 2"]}
                                    onChange={handleChange}
                                    placeholder="Detalle o descripción"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={editandoId ? handleActualizar : handleCrear}
                                    disabled={guardando}
                                    className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition font-medium disabled:opacity-50"
                                >
                                    {guardando ? "Guardando..." : editandoId ? "Actualizar" : "Guardar"}
                                </button>
                                <button
                                    onClick={handleCancelar}
                                    className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition font-medium"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {cargando ? (
                        <div className="p-8 text-center text-gray-500">Cargando datos...</div>
                    ) : registros.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">No hay registros guardados.</div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="p-4 font-semibold text-gray-600">ID</th>
                                    <th className="p-4 font-semibold text-gray-600">Campo 1</th>
                                    <th className="p-4 font-semibold text-gray-600">Campo 2</th>
                                    <th className="p-4 font-semibold text-gray-600 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registros.map((r) => (
                                    <tr key={r.id} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-gray-500">{r.id}</td>
                                        <td className="p-4 text-gray-800">{r["Column 1"]}</td>
                                        <td className="p-4 text-gray-800">{r["Column 2"]}</td>
                                        <td className="p-4 text-right space-x-2">
                                            <button
                                                onClick={() => handleEditarClick(r)}
                                                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-sm font-medium"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleBorrar(r.id)}
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm font-medium"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CrudPage;
